<!-- 顶部选项卡 -->
<template>
<div class="shop-tab">
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">点菜</mt-tab-item>
    <mt-tab-item id="2">商家</mt-tab-item>
  </mt-navbar>
  <!-- 设置每个tab对应的内容 -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <food-list></food-list>
      <!-- 购物车，总价及结算按钮 -->
      <cart-footer></cart-footer>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <shop-info></shop-info>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
import foodList from '@/components/food-list/food-list'
import cartFooter from '@/components/cart-footer/cart-footer'
import shopInfo from '@/components/shop-info/shop-info'
export default {
  name: 'ShopTab',
  components: {
    foodList,
    cartFooter,
    shopInfo
  },
  data () {
    return {
      selected: '1'
    }
  },
  props: {}
}
</script>

<style scope>
  /* 选项卡字体 */
  .shop-tab .mint-tab-item-label {
    font-size: 1.0rem;
    line-height: 1vh;
  }
  /* 选项卡大小 */
  .shop-tab .mint-navbar {
    height: 6vh;
  }
  /* 选项卡对应内容窗口大小 */
  .shop-tab .mint-indexlist {
    height: 63vh;
  }
</style>
