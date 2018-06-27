<!-- 商家信息 -->
<template>
  <div class="shop">
    <p class="welcome-text">{{ welcomeText }}</p>
    <mt-cell :title="shopInfo" class="shopInfo">
      <img slot="icon" src="@/assets/info5.svg" width="24" height="24">
    </mt-cell>
    <mt-cell :title="shopAddress" class="shopAddress">
      <img slot="icon" src="@/assets/address5.svg" width="24" height="24">
    </mt-cell>
    <mt-cell :title="shopPhone" class="shopPhone">
      <img slot="icon" src="@/assets/phone5.svg" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  data () {
    return {
      welcomeText: '欢迎光临本店'
    }
  },
  computed: {
    // 获取Vuex中的商家信息
    shopInfo () {
      return this.$store.state.shop.info
    },
    shopAddress () {
      return this.$store.state.shop.address
    },
    shopPhone () {
      return this.$store.state.shop.telephone
    }
  }
}
</script>

<style scoped>
  .shop .mint-cell-text {
    font-size: 5vw;
  }
  .welcome-text {
    font-size: 5vw;
    margin-top: 5vw;
    margin-bottom: 5vw;
    text-align: center;
    color: #2c3e50;
    font-weight: bold;
  }
  .shop .mint-cell {
    text-align: left
  }
  .shopInfo {
    font-size: 5vw;
  }
</style>
