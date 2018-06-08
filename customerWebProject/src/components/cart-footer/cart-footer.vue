<!-- 底部总价和结算区 -->
<template>
  <div id="bottom-bar">
    <cartlist v-if="flag"></cartlist>
    <div id="bottom-bar-left">
      <span id="cart-button" @click="showlist">
        <span id="food-total-number">5</span>
      </span>
      <span id="food-total-price">￥0</span>
    </div>
    <div id="bottom-bar-right" @click="pay">
      <span id="cart-balance">结算</span>
    </div>
  </div>
</template>

<script>
import cartlist from '@/components/cart-list/cart-list'
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    showlist () {
      if (this.flag) {
        this.flag = false
      } else {
        this.flag = true
      }
    },
    pay () {
      this.$router.push('/pagepay')
    }
  },
  components: {
    cartlist
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
    background-image: url(../../assets/gray-cart.png);
    /* background-image: url(../../assets/blue-cart.png); */
    background-size: 125%;
    background-position: center;
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
