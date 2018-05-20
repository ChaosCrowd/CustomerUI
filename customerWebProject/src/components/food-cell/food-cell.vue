<!-- 餐厅首页食物列表中的每个食物选项 -->
<template>
  <mt-cell title="皮蛋瘦肉粥" label="月售888 好评率100%" id="food-cell">
    <img slot="icon" src="@/assets/皮蛋瘦肉粥.jpeg" id="food-icon">
    <span id="food-price">￥10</span>
    <img src="@/assets/blue-minus.png" id="cart-minus" v-on:click="foodNumber -= 1" v-if="foodNumber > 0">
    <span id="food-number" v-if="foodNumber > 0">{{ foodNumber }}</span>
    <img src="@/assets/blue-add.png" id="cart-add" v-on:click="foodNumber += 1">
  </mt-cell>
</template>

<script>
export default {
  data () {
    return {
      foodNumber: 0
    }
  }
}
</script>

<style scope>
  #food-cell {
    height: 30vw;
  }
  #food-icon {
    width: 25vw;
    height: 25vw;
    position: absolute;
    left: 0;
    margin-top: 1.5vw;
    margin-left: 1.5vw;
  }
  #cart-minus {
    width: 6vw;
    height: 6vw;
    position: absolute;
    right: 18.5vw;
    bottom: 2.5vw;
    margin: auto;
  }
  #cart-add {
    width: 6vw;
    height: 6vw;
    position: absolute;
    right: 2.5vw;
    bottom: 2.5vw;
    margin: auto;
  }
  #food-price{
    display: block;
    position: absolute;
    left: 30vw;
    top: 23vw;
    color: red;
  }
  #food-number {
    display: block;
    position: absolute;
    width: 10vw;
    text-align: center;
    right: 8.5vw;
    bottom: 3vw;
  }
  .mint-cell-text {
    display: block;
    margin-top: 1.5vw;
    margin-left: 28vw;
    text-align: left;
  }
  .mint-cell-label {
    display: block;
    margin-top: 3.5vw;
    margin-left: 28vw;
    text-align: left;
  }
</style>
