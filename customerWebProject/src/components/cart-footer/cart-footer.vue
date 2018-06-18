<!-- 底部总价和结算区 -->
<template>
  <div id="bottom-bar">
    <div id="bottom-bar-left">
      <span id="cart-button"
      v-bind:class="{ 'cart-button-gray': isEmpty, 'cart-button-blue': !isEmpty}">
          <span id="food-total-number" v-if="computeTotalNum > 0">{{ computeTotalNum }}</span>
      </span>
      <span id="food-total-price">￥{{ computeTotalPrice | currencydecimal }}</span>
    </div>
    <div id="bottom-bar-right"
      v-bind:class="{ 'gray-background': isEmpty, 'green-background': !isEmpty}">
      <span id="cart-balance" v-on:click="uploadOrder">结算</span>
    </div>
  </div>
</template>

<script>
export default {
  // 确保小数部分合理表示
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  computed: {
    computeTotalNum () {
      return this.$store.state.totalNum
    },
    computeTotalPrice () {
      return this.$store.state.totalPrice
    },
    isEmpty () {
      return this.$store.state.totalNum === 0
    }
  },
  methods: {
    // 上传订单
    // 本应在提交页面，此处用于熟悉和测试，之后转移
    uploadOrder () {
      if (this.$store.state.totalNum > 0) {
        console.log('Uploading')
        this.$store.dispatch('uploadOrder')
      }
    }
  }
}
</script>

<style scope>
  #bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7.5vh;
    color: white;
  }
  #bottom-bar-left {
    float: left;
    left: 0;
    margin: 0;
    width: 70%;
    height: 100%;
    background-color: rgb(112, 112, 112);
  }
  #bottom-bar-right {
    float: right;
    right: 0;
    width: 30%;
    height: 100%;
  }
  /* 购物车为空，‘结算’为灰色 */
  .gray-background {
    background-color: rgb(112, 112, 112);
  }
  /* 购物车不为空，‘结算’为绿色 */
  .green-background {
    background-color: rgb(139, 195, 74)
  }
  #food-total-price {
    position: absolute;
    left: 20vw;
    line-height: 12.8vw;
  }
  #cart-balance {
    line-height: 12.8vw;
    text-align: center;
  }
  #cart-button {
    position: absolute;
    bottom: 2vw;
    left: 2vw;
    background-color: white;
    border-radius: 50%;
    border: 4px solid gray;
    width: 13.8vw;
    height: 13.8vw;
    background-size: 125%;
    background-position: center;
  }
  /* 购物车灰、蓝两种颜色 */
  .cart-button-gray {
    background-image: url(../../assets/gray-cart.png);
  }
  .cart-button-blue {
    background-image: url(../../assets/blue-cart.png);
  }
  #food-total-number {
    position: absolute;
    right: 0;
    top: 0;
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background-color: orangered;
  }
</style>
