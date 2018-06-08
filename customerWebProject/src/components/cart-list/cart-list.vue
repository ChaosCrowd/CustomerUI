<template>
  <div id="cart-list">
    <div id="title">订单</div>
    <cart-cell></cart-cell>
    <cart-cell></cart-cell>
    <cart-cell></cart-cell>
    <cart-cell></cart-cell>
    <cart-cell></cart-cell>
  </div>
</template>

<script>
import cartCell from '@/components/cart-cell/cart-cell'
export default {
  components: {
    cartCell
  }
}
</script>

<style>
#cart-list {
  position: fixed;
  bottom: 7.5vh;
  width: 100%;
  height: 25vh;
  color: black;
  background: grey;
  overflow-y: auto;
}
#title {
  background: orange;
}
</style>
