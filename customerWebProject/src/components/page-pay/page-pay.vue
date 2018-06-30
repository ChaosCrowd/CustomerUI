<!-- 结算页面 -->
<template>
  <div id="page-pay">
    <img src="@/assets/back4.png" v-on:click="goback" class="pay-backButton">
    <p id="orderID-text" v-if="orderID !== -1">{{ orderIDText }}</p>
    <p id="selected-food">订单</p>
    <div id="pay-list">
      <mt-cell v-for="good in goodData" :key="good.id" v-bind:id="good.id" v-if="good.num > 0">
        <img :src="good.img_src" id="pfood-icon">
        <span id="pname">{{ good.name }}</span>
        <span id="pnum">{{ good.num }}</span>
        <span id="pprice">￥{{ good.price | currencydecimal }}</span>
      </mt-cell>
    </div>
    <p id="pay-mention">{{ totalNumAndPrice }}</p>
    <p id="pay-overview">其他</p>
    <div class="pay-info">
      <mt-cell title="桌号">
        <img slot="icon" src="@/assets/table.svg" class="pay-overview-icon">
        {{ tableNumber }}
      </mt-cell>
      <div v-on:click="wayflag = !wayflag">
        <mt-cell title="支付方式" is-link>
          <img slot="icon" src="@/assets/pay.svg" class="pay-overview-icon">
          {{ payway }}
        </mt-cell>
      </div>
      <mt-field label="备注" class="remark" v-model="remarks"></mt-field>
    </div>
    <div id="submit" :class="classObject" v-on:click="uploadOrder">{{ orderStateText }}</div>
    <mt-popup v-model="wayflag" position="bottom">
      <mt-picker :slots="slots2" id="numpicker" @change="onValuesChange"></mt-picker>
    </mt-popup>
    <!-- 用来撑高提交按钮 -->
    <div id="pay-footer"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PagePay',
  data () {
    return {
      wayflag: false,
      remarks: '',
      payway: '现金支付',
      slots2: [{values: ['现金支付', '支付宝', '微信支付']}],
      stateNum: 0,
      stateText: ['提交订单', '正在提交...', '提交失败', '提交成功', '商家已接单', '订单已完成', '订单被拒', '商家未回应'],
      orderID: -1,
      // 轮询次数
      pollingTime: 0
    }
  },
  // 确保小数部分合理表示
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  computed: {
    goodData: function () {
      return this.$store.state.goods
    },
    totalNumAndPrice: function () {
      var str = '已选菜品共' + String(this.$store.state.totalNum) + '项,'
      str += '合计' + String(this.$store.state.totalPrice.toFixed(2)) + '元人民币'
      return str
    },
    // 桌号
    tableNumber: function () {
      return this.$store.state.tables_number
    },
    // state对应的订单状态
    orderStateText: function () {
      return this.stateText[this.stateNum]
    },
    // 显示订单号
    orderIDText: function () {
      return '订单号: ' + this.orderID
    },
    // 订单状态对应按钮颜色
    // 按钮的颜色变化
    classObject: function () {
      return {
        'yellow-button': this.stateNum === 0 || this.stateNum === 1 || this.stateNum === 3,
        'red-button': this.stateNum === 2 || this.stateNum === 6 || this.stateNum === 7,
        'green-button': this.stateNum === 4 || this.stateNum === 5
      }
    }
  },
  methods: {
    onValuesChange (picker, values) {
      if (this.wayflag) {
        this.payway = values[0]
      }
    },
    // 回退
    goback () {
      if (this.orderID !== -1) {
        this.$messagebox.confirm('订单和购物车数据将清空,确定执行此操作?').then(action => {
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }, action => {})
      } else {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    },
    // 获取已经选择的菜品
    getSelectedFood () {
      var foods = []
      for (var x in this.$store.state.goods) {
        if (this.$store.state.goods[x].num > 0) {
          var foodInfo = {
            goods_id: this.$store.state.goods[x].id,
            count: this.$store.state.goods[x].num
          }
          foods.push(foodInfo)
        }
      }
      return foods
    },
    // 提交订单,获得订单的id
    uploadOrder () {
      if (this.stateNum === 0) {
        this.stateNum = 1
        axios
          .post('https://private-caa14-eatwelly.apiary-mock.com/api/v1/order', {
            tables_number: this.$store.state.tables_number,
            timestamp: Date.now(),
            order: this.getSelectedFood()
          })
          .then(response => {
            this.stateNum = 3
            this.orderID = response.data.data.order_id
            console.log(this.orderID)
            // 将订单号和状态码保存
            window.sessionStorage.setItem('orderID', JSON.stringify(this.orderID))
            window.sessionStorage.setItem('stateNum', JSON.stringify(this.stateNum))
            this.pollingForState()
          })
          .catch(err => {
            console.error(err)
            this.stateNum = 2
          })
      }
    },
    // 轮询,每隔一秒调用一次获取订单状态api
    pollingForState () {
      var self = this
      // 开始轮询
      var polling = setInterval(function () {
        self.getOrderState()
        // 商家接单,停止轮询
        if (self.stateNum === 4) {
          console.log('商家接单,停止轮询')
          self.$toast({
            message: '商家已接单,请静候美食',
            iconClass: 'mint-toast-icon mintui mintui-success'
          })
          clearInterval(polling)
        }
        // 订单已完成
        if (self.stateNum === 5) {
          console.log('订单已完成,停止轮询')
          self.$toast({
            message: '这个订单已经完成了哦',
            iconClass: 'mint-toast-icon mintui mintui-success'
          })
          clearInterval(polling)
        }
        // 商家拒单,停止轮询
        if (self.stateNum === 6) {
          console.log('商家拒单,停止轮询')
          clearInterval(polling)
          self.$toast('订单被拒,小二将与您联系')
        }
        // 轮询次数达到600次则因超时终止
        if (self.pollingTime >= 600) {
          self.stateNum = 7
          console.log('超时,停止轮询')
          clearInterval(polling)
          self.$toast('商家未回应,小二将与您联系')
        }
      }, 1000)
    },
    // 获取订单的状态
    getOrderState () {
      console.log('发送一次轮询')
      this.pollingTime += 1
      axios
        .get('https://private-caa14-eatwelly.apiary-mock.com/api/v1/orderStatus?orderID=' + String(this.orderID))
        .then(response => {
          if (this.stateNum < response.data.data.status + 1) {
            this.stateNum = response.data.data.status + 1
            window.sessionStorage.setItem('stateNum', JSON.stringify(this.stateNum))
          }
          console.log('Order state:', this.stateText[this.stateNum])
        })
        .catch(err => console.error(err))
    }
  },
  // 生命周期钩子,如果没有state,则从本地载入
  mounted: function () {
    if (this.$store.state.goods.length === 0 &&
    window.sessionStorage.getItem('state')) {
      this.$store.dispatch('loadLocalState',
        JSON.parse(window.sessionStorage.getItem('state')))
      // 用本地存储的订单号初始化数据
      if (window.sessionStorage.getItem('orderID')) {
        this.orderID = JSON.parse(window.sessionStorage.getItem('orderID'))
        if (window.sessionStorage.getItem('stateNum')) {
          this.stateNum = JSON.parse(window.sessionStorage.getItem('stateNum'))
          // 如果原状态为提交失败,退回至待提交;如果为提交成功,则开始轮询
          if (this.stateNum === 2) {
            this.stateNum = 0
          } else if (this.stateNum === 3) {
            this.pollingForState()
          }
        }
      }
    }
  },
  // 在销毁之前如果订单已经提交,则清空购物车和订单信息
  beforeDestroy: function () {
    // 清空购物车
    if (this.stateNum >= 3) {
      this.$store.dispatch('clearFood')
      // 如果订单已成功提交,清空订单信息
      window.sessionStorage.removeItem('stateNum')
      window.sessionStorage.removeItem('orderID')
    }
  }
}
</script>

<style scope>
#page-pay {
  /* position: fixed; */
  top: 0vh;
  left: 0vh;
  width: 100vw;
  /* height: 100vh; */
  color: #2c3e50;
  overflow-y: auto;
}
#orderID-text {
  position: absolute;
  top: 1vw;
  left: 35vw;
  margin: 0;
  font-size: 5vw;
  height: 10vw;
  line-height: 10vw;
  font-weight: bold;
}
.icon-success {
  background-color: green;
  background-image: url('../../assets/gray-cart.png');
  background-size: 100%;
}
.yellow-button {
  background-color: orange;
}
.red-button {
  background-color: #CC3300;
}
.green-button {
  background-color: rgb(139, 195, 74);
}
#page-pay .mint-cell {
  height: 15vw;
  color: #2c3e50;
}
#page-pay .mint-popup {
  width: 100vw;
  height: 20vh;
}
.pay-overview-icon {
  position: absolute;
  top: 3vw;
  left: 5vw;
  width: 8vw;
  height: 8vw;
}
#selected-food {
  margin: 0;
  position: absolute;
  top: 12vw;
  left: 0;
  width: 20vw;
  height: 10vw;
  background-color: #3399CC;
  border-radius: 0 5vw 5vw 0;
  font-size: 5vw;
  line-height: 10vw;
}
#pay-overview {
  margin: 0;
  position: absolute;
  top: 80vw;
  left: 0;
  width: 20vw;
  height: 10vw;
  background-color: #FF6666;
  border-radius: 0 5vw 5vw 0;
  font-size: 5vw;
  line-height: 10vw;
}
#pay-mention {
  position: absolute;
  top: 135vw;
  right: 0;
  font-size: 5vw;
  font-weight: bold;
}
#title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40vw;
  background: orange;
  filter:alpha(opacity=70);
  opacity:0.7;
}
#page-pay .pay-backButton {
  position: absolute;
  top: 0;
  left: 0;
  width: 12vw;
  height: 12vw
}
#pay-list {
  position: absolute;
  top: 25vw;
  left: 0vh;
  width: 100vw;
  max-height: 30vh;
  overflow-y: auto;
  border-radius: 2vw;
  background-color: white;
}
.pay-info {
  position: absolute;
  top:93vw;
  left: 0vh;
  width: 100vw;
  color: black;
  background-color: white;
  overflow-y: auto;
}
.pay-info .mint-cell-text {
  display: block;
  margin-left: 10vw;
  text-align: left;
  font-size: 5vw;
}
#submit {
  position: absolute;
  top: 150vw;
  width: 50vw;
  height: 10vw;
  color: black;
  vertical-align: middle;
  text-align: center;
  font-size: 6vw;
  border-radius: 4vw;
  left: 25vw;
  line-height: 10vw;
}
#numpicker {
  position: fixed;
  bottom: 0vh;
  width: 100%;
  height: 100%;
  color: black;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
  background-color: white;
}
#page-pay .remark .mint-field-core {
  margin-right: 5vw;
  text-align: right;
}
#pfood-icon {
  position: absolute;
  top: 2vw;
  left: 4vw;
  width: 11vw;
  height: 11vw;
}
#pname {
  position: absolute;
  top: 5vw;
  left: 20vw;
  color: #2c3e50;
  font-size: 4vw;
}
#pnum {
  position: absolute;
  top: 5vw;
  left: 60vw;
  color: #2c3e50;
  font-size: 4vw;
}
#pprice {
  position: absolute;
  top: 5vw;
  right: 4vw;
  color: #2c3e50;
  font-size: 4vw;
}
#pay-footer {
  position: absolute;
  top: 162vw;
  height: 10vw;
  width: 1vw;
}
</style>
