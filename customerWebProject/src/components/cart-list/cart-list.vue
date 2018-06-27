<template>
  <div id="cart-list">
    <div id="cart-title">
      <div id="cart-text">已选择</div>
      <img src="@/assets/trash.svg" id="trash-icon">
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
#trash-icon {
  position: absolute;
  right: 24vw;
  width: 6vw;
  height: 6vw;
}
#cart-list {
  position: fixed;
  bottom: 7.5vh;
  width: 100%;
  color: black;
  background: #E6E6E6;
}
#cell-list {
  max-height: 25vh;
  overflow-y: auto;
}
#cart-text {
  width: 75%;
  float: left;
  text-align: left;
  text-indent: 6vw;
  font-size: 4vw;
}
#clear-botton {
  color: white;
  color: black;
  font-size: 4vw;
}
</style>
