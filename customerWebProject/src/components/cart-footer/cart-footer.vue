<!-- 底部总价和结算区 -->
<template>
  <div id="bottom-bar">
    <transition name="slide-fade">
      <cartlist v-if="flag" style="z-index: 2;"></cartlist>
    </transition>
    <div class="v-modal" style="z-index: 1;" v-if="flag" @click="showlist"></div>
    <div id="bottom-bar-left">
      <span id="cart-button"
      v-bind:class="{ 'cart-button-gray': isEmpty, 'cart-button-blue': !isEmpty}"
      @click="showlist">
          <span id="food-total-number" v-if="computeTotalNum > 0">{{ computeTotalNum }}</span>
      </span>
      <span id="food-total-price">￥{{ computeTotalPrice | currencydecimal }}</span>
    </div>
    <div id="bottom-bar-right"
      v-bind:class="{ 'gray-background': isEmpty, 'green-background': !isEmpty}"
       @click="pay">
      <span id="cart-balance" v-on:click="uploadOrder">结算</span>
    </div>
  </div>
</template>

<script>
import cartlist from '@/components/cart-list/cart-list'
export default {
  name: 'CartFooter',
  data () {
    return {
      flag: false
    }
  },
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
  watch: {
    computeTotalNum (curVal, oldVal) {
      if (curVal === 0) {
        this.flag = false
      }
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
    },
    // 展示购物车
    showlist () {
      if (this.flag) {
        this.flag = false
      } else if (this.computeTotalNum !== 0) {
        this.flag = true
      }
    },
    // 跳转到结算界面
    pay () {
      if (this.$store.state.totalNum !== 0) {
        this.$router.push('/pagepay')
      }
    }
  },
  components: {
    cartlist
  }
}
</script>

<style scope>
  /* 购物车列表进入进出动画效果 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
    }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(300px);
    opacity: 100;
  }
  #bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7.5vh;
    color: white;
  }
  #bottom-bar-left {
    position: absolute;
    z-index: 2;
    float: left;
    left: 0;
    margin: 0;
    width: 70%;
    height: 100%;
    background-color: rgb(112, 112, 112);
  }
  #bottom-bar-right {
    position: absolute;
    z-index: 2;
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
