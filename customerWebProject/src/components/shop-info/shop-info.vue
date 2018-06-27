<!-- 商家信息 -->
<template>
  <div class="shop">
    <mt-cell :title="shopInfo" class="shopInfo">
      <img slot="icon" src="@/assets/info2.png" width="24" height="24">
    </mt-cell>
    <mt-cell :title="shopAddress" class="shopAddress">
      <img slot="icon" src="@/assets/address1.png" width="24" height="24">
    </mt-cell>
    <mt-cell :title="shopPhone" class="shopPhone">
      <img slot="icon" src="@/assets/phone1.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
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
  .shop .mint-cell {
    text-align: left
  }
</style>
