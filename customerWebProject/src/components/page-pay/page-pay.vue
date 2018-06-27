<!-- 结算页面 -->
<template>
  <div id="page-pay">
    <img src="@/assets/back4.png" v-on:click="goback" class="backButton">
    <p id="selected-food">订单</p>
    <div id="pay-list">
      <mt-cell v-for="good in goodData" :key="good.id" v-bind:id="good.id" v-if="good.num > 0">
        <img :src="good.img_src" width="36" height="36" id="pfood-icon">
        <span id="pname">{{ good.name }}</span>
        <span id="pnum">{{ good.num }}</span>
        <span id="pprice">￥{{ good.price }}</span>
      </mt-cell>
    </div>
    <p id="pay-mention">{{ totalNumAndPrice }}</p>
    <p id="pay-overview">其他</p>
    <div class="pay-info">
      <mt-cell title="桌号">{{ tableNumber }}</mt-cell>
      <div v-on:click="wayflag = !wayflag">
        <mt-cell title="支付方式" is-link>{{ payway }}</mt-cell>
      </div>
      <mt-field label="备注" class="remark" v-model="remarks"></mt-field>
    </div>
    <div id="submit">提交订单</div>
    <mt-popup v-model="numflag" position="bottom">
      <mt-picker :slots="slots1" id="numpicker" @change="onValuesChange"></mt-picker>
    </mt-popup>
    <mt-popup v-model="wayflag" position="bottom">
      <mt-picker :slots="slots2" id="numpicker" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numflag: false,
      wayflag: false,
      peoplenum: 1,
      remarks: '',
      payway: '现金支付',
      slots1: [{values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}],
      slots2: [{values: ['现金支付', '支付宝', '微信支付']}]
    }
  },
  computed: {
    goodData: function () {
      return this.$store.state.goods
    },
    totalNumAndPrice: function () {
      var str = '共' + String(this.$store.state.totalNum) + '项,'
      str += '合计' + String(this.$store.state.totalPrice.toFixed(2)) + '元人民币'
      return str
    },
    // 桌号
    tableNumber: function () {
      return this.$store.state.tables_number
    }
  },
  methods: {
    onValuesChange (picker, values) {
      if (this.numflag) {
        this.peoplenum = values[0]
      } else if (this.wayflag) {
        this.payway = values[0]
      }
    },
    // 回退
    goback () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style scope>
.mint-popup {
  width: 100vw;
  height: 20vh;
}
#selected-food {
  margin: 0;
  position: absolute;
  top: 12vw;
  left: 0;
  width: 20vw;
  height: 10vw;
  background-color: white;
  border-radius: 0 5vw 5vw 0;
}
#pay-overview {
  margin: 0;
  position: absolute;
  top: 95vw;
  left: 0;
  width: 20vw;
  height: 10vw;
  background-color: white;
  border-radius: 0 5vw 5vw 0;
}
#pay-mention {
  position: absolute;
  top: 75vw;
  right: 0;
  font-size: 5vw;
}
#page-pay {
  position: fixed;
  top: 0vh;
  left: 0vh;
  width: 100vw;
  height: 100vh;
  color: black;
  overflow-y: auto;
  background-color: rgb(250, 235, 215);
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
.backButton {
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
  color: black;
  background: white;
  overflow-y: auto;
}
.pay-info {
  position: absolute;
  top:108vw;
  left: 0vh;
  width: 100vw;
  color: black;
  background: white;
  overflow-y: auto;
}
.pay-info .mint-cell-text {
    display: block;
    margin-left: 10vw;
    text-align: left;
  }
#submit {
  position: absolute;
  bottom: 8vw;
  width: 50vw;
  height: 10vw;
  color: black;
  vertical-align: middle;
  text-align: center;
  font-size: 6vw;
  border-radius: 4vw;
  left: 25vw;
  background-color: orange;
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
.remark .mint-field-core {
  margin-right: 5vw;
  text-align: right;
}
#pfood-icon {
  position: absolute;
  top: 1vh;
  left: 3vh;
}
#pname {
  position: absolute;
  top: 2vh;
  left: 10vh;
}
#pnum {
  position: absolute;
  top: 2vh;
  left: 30vh;
}
#pprice {
  position: absolute;
  top: 2vh;
  right: 2vh;
}
</style>
