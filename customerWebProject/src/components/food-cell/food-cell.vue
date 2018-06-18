<!-- 餐厅首页食物列表中的每个食物选项 -->
<template>
  <mt-cell :title="foodName" :label="desc" id="food-cell">
    <img slot="icon" src="@/assets/皮蛋瘦肉粥.jpeg" id="food-icon">
    <span id="food-volume">{{ foodVolume }}</span>
    <span id="food-price">￥{{ foodPrice | currencydecimal }}</span>
    <img src="@/assets/blue-minus.png" id="cart-minus" v-on:click="decreaseFood" v-if="foodNum > 0">
    <span id="food-number" v-if="foodNum > 0">{{ foodNum }}</span>
    <img src="@/assets/blue-add.png" id="cart-add" v-on:click="increaseFood">
  </mt-cell>
</template>

<script>
export default {
  data () {
    return {
      foodNum: 0,
      foodID: this.id,
      foodName: this.name,
      foodDesc: this.desc,
      foodPrice: this.price,
      foodImgSrc: this.img_src,
      foodVolume: '月售 ' + this.volume
    }
  },
  // 确保小数部分合理表示
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  props: {
    id: Number,
    name: String,
    desc: String,
    price: Number,
    img_src: String,
    volume: Number
  },
  methods: {
    // 减菜
    decreaseFood () {
      this.foodNum -= 1
      this.$store.commit('decreaseFood', {
        foodPrice: this.foodPrice,
        foodID: this.foodID
      })
    },
    // 加菜
    increaseFood () {
      this.foodNum += 1
      this.$store.commit('increaseFood', {
        foodPrice: this.foodPrice,
        foodID: this.foodID
      })
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
  #food-volume {
    position: absolute;
    left: 31vw;
    top: 16vw;
    font-size: 3vw;
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
