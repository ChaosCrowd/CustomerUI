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
    width: 14vh;
    height: 14vh;
    top: 3vh;
    left: 3vh;
    background-size: 100%;
    background-position: center;
  }
  #restaurant-name {
    position: absolute;
    color: white;
    left: 20vh;
    top: 6vh;
    font-weight: bold;
    font-size: 6vw;
  }
</style>
