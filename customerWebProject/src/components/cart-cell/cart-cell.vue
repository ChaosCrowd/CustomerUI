<template>
  <mt-cell id="cart-cell">
    <span id="cfood-name">皮蛋瘦肉粥</span>
    <span id="cfood-price">￥10</span>
    <img src="@/assets/blue-minus.png" id="cart-minus" v-on:click="foodNumber -= 1" v-if="foodNumber > 0">
    <span id="cfood-number" v-if="foodNumber > 0">{{ foodNumber }}</span>
    <img src="@/assets/blue-add.png" id="cart-add" v-on:click="foodNumber += 1">
  </mt-cell>
</template>

<script>
export default {
  data () {
    return {
      foodNumber: 1
    }
  }
}
</script>

<style scope>
  #cart-cell {
    height:12vw;
    background-color: rgb(230, 230, 230);
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
  #cfood-name{
    display: block;
    position: absolute;
    left: 6vw;
    top: 5vw;
    color: black;
  }
  #cfood-price{
    display: block;
    position: absolute;
    left: 60vw;
    top: 5vw;
    color: black;
  }
  #cfood-number {
    display: block;
    position: absolute;
    width: 10vw;
    text-align: center;
    right: 8.5vw;
    bottom: 3vw;
  }
</style>
