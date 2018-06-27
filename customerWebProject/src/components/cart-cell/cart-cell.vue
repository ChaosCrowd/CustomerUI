<template>
  <mt-cell id="cart-cell" v-if="foodNum > 0">
    <span id="cfood-name">{{ foodName }}</span>
    <span id="cfood-price">￥{{ foodPrice * foodNum | currencydecimal }}</span>
    <img src="@/assets/blue-minus.png" id="cart-minus" v-on:click="decreaseFood" v-if="foodNum> 0">
    <span id="cfood-number" v-if="foodNum > 0">{{ foodNum }}</span>
    <img src="@/assets/blue-add.png" id="cart-add" v-on:click="increaseFood">
  </mt-cell>
</template>

<script>
export default {
  name: 'CartCell',
  data () {
    return {
      foodID: this.id
    }
  },
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
    foodPrice () {
      return this.food.price
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
    }
  }
}
</script>

<style scope>
  #cart-cell {
    height:12vw;
    font-size: 5vw;
    background-color: white;
  }
  #cart-cell #cart-minus {
    width: 6vw;
    height: 6vw;
    position: absolute;
    right: 18.5vw;
    margin: auto;
    bottom: 5vw;
  }
  #cart-cell #cart-add {
    width: 6vw;
    height: 6vw;
    position: absolute;
    right: 2.5vw;
    margin: auto;
    bottom: 5vw;
  }
  #cart-cell #cfood-name{
    display: block;
    position: absolute;
    left: 6vw;
    top: 5vw;
    color: black;
  }
  #cart-cell #cfood-price{
    display: block;
    position: absolute;
    left: 50vw;
    top: 5vw;
    color: black;
  }
  #cart-cell #cfood-number {
    display: block;
    position: absolute;
    width: 10vw;
    text-align: center;
    color: #2c3e50;
    right: 8.5vw;
    bottom: 5vw;
  }
</style>
