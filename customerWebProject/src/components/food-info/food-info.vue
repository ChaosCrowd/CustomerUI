<template>
  <div id="food-info">
    <img :src="foodImgSrc" id="food-img">
    <img src="@/assets/back.png" id="back-img" @click="$router.go(-1)">
    <div id="info">
      <p id="name">{{ foodName }}</p>
      <p id="sell">{{ foodVolume }}</p>
      <p id="price">￥{{ foodPrice }}</p>
      <button id="add">加入购物车</button>
    </div>
    <div id="comment">
      <mt-cell v-for="n in 10" :title="'评论 ' + n" v-bind:key = n></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foodID: this.$route.params.fid
    }
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
    foodName () {
      return this.food.name
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
  }
}
</script>

<style scope>
#food-info {
  position: fixed;
  top: 0vh;
  left: 0vh;
  width: 100%;
  height: 100%;
  color: black;
  overflow-y: auto;
  background-color: rgb(240, 240, 240);
}
#food-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
}
#back-img {
  position: absolute;
  top: 2vw;
  left: 2vw;
  width: 10vw;
  height: 10vw
}
#info {
  position: absolute;
  top: 40vh;
  left: 0vh;
  width: 100%;
  height: 15%;
  color: black;
  background: white;
  overflow-y: auto;
}
#name {
  position: absolute;
  top: 0vw;
  left: 5vw;
  font-size: 18px;
  font-weight:bold;
}
#sell {
  position: absolute;
  top: 7vw;
  left: 5vw;
  color: gray;
  font-size: 15px;
}
#price {
  position: absolute;
  top: 8vw;
  left: 4vw;
  font-weight:bold;
  color:red;
  font-size: 30px;
}
#add {
  position: absolute;
  border-radius: 25px;
  background: orange;
  bottom: 5vw;
  right: 5vw;
  border: none;
  width: 100px;
  height: 30px;
}
#comment {
  position: absolute;
  top: 60vh;
  left: 0vh;
  width: 100%;
  height: 30%;
  color: black;
  background: white;
  overflow-y: auto;
}
</style>
