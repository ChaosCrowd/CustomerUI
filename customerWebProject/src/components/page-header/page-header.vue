<!-- 商家首页（点餐页面）开头 -->
<!-- 暂定只用图片作为点餐页面开头 -->
<template>
  <div class="head">
    <div id="restaurant-icon"></div>
    <span id="restaurant-name">正宗农家咸骨粥</span>
  </div>
</template>

<style scope>
  .head {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    /* 仅为标记，待删 */
    /* border: 1px solid #DDDDDD; */
    /* 暂设背景 */
    background-image: url(../../assets/预设背景.jpeg);
    background-size: 100%;
  }
  #restaurant-icon {
    position: absolute;
    width: 25vw;
    height: 25vw;
    top: 4vw;
    left: 4vw;
    background-image: url(../../assets/restaurant.jpg);
    background-size: 100%;
    background-position: center;
  }
  #restaurant-name {
    position: absolute;
    color: white;
    left: 35vw;
    top: 10vw;
    font-weight: bold;
  }
</style>
