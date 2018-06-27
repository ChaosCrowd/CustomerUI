<!-- 商家首页（点餐页面）开头 -->
<template>
  <div class="head" :style="{backgroundImage: 'url('+shopBackground+')'}">
    <div id="restaurant-icon" :style="{backgroundImage: 'url('+shopIcon+')'}"></div>
    <span id="restaurant-name">{{ shopName }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  computed: {
    shopIcon () {
      return this.$store.state.shop.icon_url
    },
    shopName () {
      return this.$store.state.shop.name
    },
    shopBackground () {
      return this.$store.state.shop.background_url
    }
  }
}
</script>

<style scope>
  .head {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    background-size: 100%;
  }
  #restaurant-icon {
    position: absolute;
    width: 25vw;
    height: 25vw;
    top: 4vw;
    left: 4vw;
    background-size: 100%;
    background-position: center;
  }
  #restaurant-name {
    position: absolute;
    color: white;
    left: 35vw;
    top: 10vw;
    font-weight: bold;
  }
</style>
