<template>
  <div id="cart-list">
    <div id="cart-title">
      <div id="cart-text">订单</div>
      <div id="clear-botton" @click="clearFood">清空购物车</div>
    </div>
    <div id="cell-list">
      <cart-cell v-for="good in goodData" :key="good.id" v-bind:id="good.id"></cart-cell>
    </div>
  </div>
</template>

<script>
import cartCell from '@/components/cart-cell/cart-cell'
export default {
  computed: {
    goodData: function () {
      return this.$store.state.goods
    }
  },
  components: {
    cartCell
  },
  methods: {
    clearFood () {
      this.$store.dispatch('clearFood')
    }
  }
}
</script>

<style>
#cart-list {
  position: fixed;
  bottom: 7.5vh;
  width: 100%;
  color: black;
  background: grey;
}
#cell-list {
  max-height: 25vh;
  overflow-y: auto;
}
#cart-text {
  background: orange;
  width: 75%;
  float: left;
  text-align: left;
  text-indent:20px
}
#clear-botton {
  background: grey;
  color: white;
}
</style>
