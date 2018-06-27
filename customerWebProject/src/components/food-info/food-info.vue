<!-- 商品详情界面 -->
<template>
  <div class="food-info">
    <mt-cell :title="foodName" class="info-cell">
      <img src="@/assets/back4.png" v-on:click="goback" class="info-backButton">
      <img slot="icon" :src="foodImgSrc" id="info-icon">
      <span id="info-volume">{{ foodVolume }}</span>
      <span id="info-price">￥{{ foodPrice | currencydecimal }}</span>
      <img src="@/assets/blue-minus.png" id="info-cart-minus" v-on:click="decreaseFood" v-if="foodNum> 0">
      <span id="info-number" v-if="foodNum > 0">{{ foodNum }}</span>
      <img src="@/assets/blue-add.png" id="info-cart-add" v-if="foodNum> 0" v-on:click="increaseFood">
      <p id="info-carttext" v-on:click="increaseFood" v-if="foodNum === 0">{{ cartText }}</p>
      <p id="info-desctext">{{ descText }}</p>
      <p id="info-desc">{{ foodDesc }}</p>
    </mt-cell>
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import cartFooter from '@/components/cart-footer/cart-footer'
export default {
  data () {
    return {
      foodID: this.$route.params.fid,
      descText: '菜品描述',
      cartText: '加入购物车'
    }
  },
  components: {
    cartFooter
  },
  // 确保小数部分合理表示
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  computed: {
    // 通过id获取菜品数据
    food () {
      return this.$store.getters.getGoodByID(this.foodID)
    },
    foodNum () {
      return this.food.num
    },
    foodName () {
      return this.food.name
    },
    foodDesc () {
      return this.food.desc
    },
    foodPrice () {
      return this.food.price
    },
    foodImgSrc () {
      return this.food.img_src
    },
    foodVolume () {
      return '月售 ' + this.food.volume
    }
  },
  methods: {
    // 减菜
    decreaseFood () {
      if (this.foodNum > 0) {
        this.$store.commit('decreaseFood', {
          foodPrice: this.foodPrice,
          foodID: this.foodID
        })
      }
    },
    // 加菜
    increaseFood () {
      this.$store.commit('increaseFood', {
        foodPrice: this.foodPrice,
        foodID: this.foodID
      })
    },
    // 回退
    goback () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style scope>
  .food-info {
    width: 100vw;
    height: 100vh;
    background-color: rgb(250, 235, 215)
  }
  .info-cell {
    height: 140vw;
    top: 0vw;
  }
  .info-backButton {
    position: absolute;
    width: 12vw;
    height: 12vw;
    top: 0;
    left: 0;
  }
  /* 菜品图像 */
  #info-icon {
    width: 96vw;
    height: 70vw;
    position: absolute;
    top: 12vw;
    left: 0;
    /* margin-top: 2vw; */
    margin-left: 2vw;
    border-radius: 2vw;
  }
  #info-volume {
    position: absolute;
    left: 5vw;
    top: 92vw;
    font-size: 4vw;
  }
  #info-cart-minus {
    width: 6vw;
    height: 6vw;
    position: absolute;
    right: 18.5vw;
    top: 98vw;
    margin: auto;
  }
  #info-cart-add {
    width: 6vw;
    height: 6vw;
    position: absolute;
    right: 2.5vw;
    top: 98vw;
    margin: auto;
  }
  #info-price{
    display: block;
    position: absolute;
    left: 4vw;
    top: 98vw;
    color: red;
    font-weight: bold;
  }
  #info-number {
    display: block;
    position: absolute;
    width: 10vw;
    text-align: center;
    right: 8.5vw;
    top: 99vw;
    font-size: 5vw;
    color: #2c3e50;
    font-weight: bold;
  }
  .food-info .mint-cell-text {
    display: block;
    position: absolute;
    top: 85vw;
    left: 5vw;
    text-align: left;
    font-weight: bold;
  }
  #info-desctext {
    position: absolute;
    font-size: 5vw;
    color: #2c3e50;
    font-weight: bold;
    left: 5vw;
    top: 105vw;
  }
  #info-desc {
    position: absolute;
    left: 5vw;
    top: 112vw;
    margin-right: 2vw;
    text-align: left;
    color: #2c3e50
  }
  #info-carttext {
    position: absolute;
    right: 2vw;
    top: 92vw;
    width: 30vw;
    height: 10vw;
    line-height: 10vw;
    border-radius: 5vw;
    font-size: 5vw;
    background-color: #FF9933;
    color: #2c3e50;
    font-weight: bold;
  }
</style>
