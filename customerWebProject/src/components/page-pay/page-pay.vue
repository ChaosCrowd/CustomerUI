<template>
  <div id="page-pay">
    <img src="@/assets/预设背景.jpeg" id="title">
    <img src="@/assets/back.png" id="back-img" @click="$router.go(-1)">
    <div id="pay-list">
      <mt-cell v-for="n in 10" v-bind:key = n>
        <img src="@/assets/皮蛋瘦肉粥.jpeg" width="36" height="36" id="pfood-icon">
        <span id="pname">皮蛋瘦肉粥</span>
        <span id="pnum">X1</span>
        <span id="pprice">￥10</span>
      </mt-cell>
    </div>
    <div id="pay-info">
      <mt-cell title="桌号" value="23"></mt-cell>
      <mt-cell title="人数" value="4"></mt-cell>
      <mt-cell title="支付方式" value="在线支付"></mt-cell>
      <mt-cell title="备注" value="顾客需求"></mt-cell>
    </div>
    <div id="submit">提交订单</div>
  </div>
</template>

<script>
</script>

<style scope>
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
  height: 100vw;
  background: orange;
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
  height: 30%;
  color: black;
  background: white;
  overflow-y: auto;
}
#pay-info {
  position: absolute;
  top:65vh;
  left: 0vh;
  width: 100%;
  color: black;
  background: white;
  overflow-y: auto;
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
