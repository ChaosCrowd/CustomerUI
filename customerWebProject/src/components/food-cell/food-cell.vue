<!-- 餐厅首页食物列表中的每个食物选项 -->
<template>
  <mt-cell :title="foodName" :label="foodDesc" class="food-cell">
    <img slot="icon" :src="foodImgSrc" id="food-icon" @click="showinfo">
    <span id="food-volume">{{ foodVolume }}</span>
    <span id="food-price">￥{{ foodPrice | currencydecimal }}</span>
    <img src="@/assets/blue-minus.png" id="cart-minus" v-on:click="decreaseFood" v-if="foodNum> 0">
    <span id="food-number" v-if="foodNum > 0">{{ foodNum }}</span>
    <img src="@/assets/blue-add.png" id="cart-add" v-on:click="increaseFood">
  </mt-cell>
</template>

<script>
export default {
  name: 'FoodCell',
  data () {
    return {
      foodID: this.id
    }
  },
  // 确保小数部分合理表示
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  props: {
    id: Number
  },
  computed: {
    // 通过id获取菜品数据
    food () {
      return this.$store.getters.getGoodByID(this.id)
    },
    foodNum () {
      return this.food.num
    },
    foodName () {
      return this.food.name
    },
    foodDesc () {
      var str = this.food.desc
      // 菜品描述多于8个字符时,显示前8个字符+省略号
      if (str.length > 8) {
        str = str.slice(0, 8) + '...'
      }
      return str
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
    // 跳转到菜品详情
    showinfo () {
      this.$router.push({name: 'foodinfo', params: {fid: this.foodID}})
    }
  }
}
</script>

<style scope>
  .food-cell {
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
    top: 22vw;
    font-size: 5vw;
    color: red;
    font-weight: bold;
  }
  #food-number {
    display: block;
    position: absolute;
    width: 10vw;
    text-align: center;
    right: 8.5vw;
    bottom: 3vw;
    font-size: 5vw;
    color: #2c3e50;
    font-weight: bold;
  }
  .food-cell .mint-cell-text {
    display: block;
    margin-top: 1.5vw;
    margin-left: 28vw;
    text-align: left;
    font-size: 5vw;
    font-weight: bold;
  }
  .food-cell .mint-cell-label {
    display: block;
    margin-top: 3.5vw;
    margin-left: 28vw;
    text-align: left;
    font-size: 3vw;
  }
</style>
