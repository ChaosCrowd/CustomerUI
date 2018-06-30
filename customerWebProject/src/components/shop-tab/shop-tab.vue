<!-- 顶部选项卡 -->
<template>
<div class="shop-tab">
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">点菜</mt-tab-item>
    <mt-tab-item id="2">商家</mt-tab-item>
  </mt-navbar>
  <!-- 设置每个tab对应的内容 -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1" class="food-list-container">
      <food-list></food-list>
      <!-- 购物车，总价及结算按钮 -->
      <cart-footer></cart-footer>
    </mt-tab-container-item>
    <mt-tab-container-item id="2" class="shop-info-container">
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
    font-size: 5vw;
    line-height: 1vh;
    color: #2c3e50;
  }
  /* 选项卡大小 */
  .shop-tab .mint-navbar {
    height: 6vh;
    border-bottom: 1px #DDDDDD solid;
    border-top: 1px #DDDDDD solid;
  }
  /* 选项卡对应内容窗口大小 */
  .shop-tab .mint-indexlist {
    height: 82.5vh;
  }
  /* 选项卡被选中时不显示蓝色底边 */
  .shop-tab .mint-navbar .mint-tab-item.is-selected {
    border-bottom: none;
    color: #2c3e50;
    font-weight: bold;
  }
  /* 商家信息板块的高度 */
  .shop-tab .shop-info-container {
    height: 90vh;
  }
  /* 菜单列表的高度 */
  .shop-tab .food-list-container {
    height: 90vh;
  }
</style>
