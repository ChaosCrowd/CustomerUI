<!-- 顶部选项卡 -->
<template>
<div>
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">点菜</mt-tab-item>
    <mt-tab-item id="2">评价</mt-tab-item>
    <mt-tab-item id="3">商家</mt-tab-item>
  </mt-navbar>

  <!-- 设置每个tab对应的内容 -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <food-list></food-list>
      <!-- 购物车，总价及结算按钮 -->
      <cart-footer></cart-footer>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <mt-cell v-for="n in 4" :title="'测试 ' + n" v-bind:key = n></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <mt-cell v-for="n in 6" :title="'选项 ' + n" v-bind:key = n></mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
import foodList from '@/components/food-list/food-list'
import cartFooter from '@/components/cart-footer/cart-footer'
export default {
  name: 'page-navbar',
  components: {
    foodList,
    cartFooter
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
  .mint-tab-item-label {
    font-size: 1.0rem;
    line-height: 1vh;
  }
  /* 选项卡大小 */
  .mint-navbar {
    height: 6vh;
  }
  /* 选项卡对应内容窗口大小 */
  .mint-indexlist {
    height: 63vh;
  }
</style>
