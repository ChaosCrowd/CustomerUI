<template>
  <div id="page-pay">
    <img src="@/assets/预设背景.jpeg" id="title">
    <img src="@/assets/back.png" id="back-img" @click="$router.go(-1)">
    <div id="pay-list">
      <mt-cell v-for="good in goodData" :key="good.id" v-bind:id="good.id" v-if="good.num > 0">
        <img :src="good.img_src" width="36" height="36" id="pfood-icon">
        <span id="pname">{{ good.name }}</span>
        <span id="pnum">{{ good.num }}</span>
        <span id="pprice">￥{{ good.price }}</span>
      </mt-cell>
    </div>
    <div class="pay-info">
      <mt-cell title="桌号">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mt-cell>
      <div v-on:click="numflag = !numflag">
        <mt-cell title="人数" is-link>{{ peoplenum }}</mt-cell>
      </div>
      <div v-on:click="wayflag = !wayflag">
        <mt-cell title="支付方式" is-link>{{ payway }}</mt-cell>
      </div>
      <mt-field label="备注" placeholder="顾客需求" class="remark" v-model="remarks"></mt-field>
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
    }
  },
  methods: {
    onValuesChange (picker, values) {
      if (this.numflag) {
        this.peoplenum = values[0]
      } else if (this.wayflag) {
        this.payway = values[0]
      }
    }
  }
}
</script>

<style scope>
.mint-popup {
  width: 100%;
  height: 20%;
}
#page-pay {
  position: fixed;
  top: 0vh;
  left: 0vh;
  width: 100%;
  height: 100%;
  color: black;
  overflow-y: auto;
  background-color: rgb(240, 240, 240);
}
#title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40vw;
  background: orange;
  filter:alpha(opacity:70);
  opacity:0.7;
}
#back-img {
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 10vw;
  height: 10vw
}
#pay-list {
  position: absolute;
  top: 30vh;
  left: 0vh;
  width: 100%;
  max-height: 30%;
  color: black;
  background: white;
  overflow-y: auto;
}
.pay-info {
  position: absolute;
  top:65vh;
  left: 0vh;
  width: 100%;
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
  bottom: 0vh;
  width: 100%;
  height: 5%;
  color: black;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
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
