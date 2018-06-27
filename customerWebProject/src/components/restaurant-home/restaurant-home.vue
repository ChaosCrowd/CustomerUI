<!-- 餐厅首页 -->
<template>
    <div>
        <!-- 头部 -->
        <page-header></page-header>
        <!-- 搜索框 -->
        <search id="search-bar"></search>
        <!-- 顶部选项卡 -->
        <shop-tab id="shop-tab"></shop-tab>
    </div>
</template>
<script>
import pageHeader from '@/components/page-header/page-header'
import search from '@/components/search-bar/search-bar'
import shopTab from '@/components/shop-tab/shop-tab'
import indexList from '@/components/food-list/food-list'
export default {
  name: 'RestaurantHome',
  components: {
    pageHeader,
    search,
    shopTab,
    indexList
  }
}
</script>

<style scope>
  /* 搜索框位置 */
  #search-bar {
    position: fixed;
    top: 20%;
    left: 0;
    width: 100%;
    height: 4%;
    /* 仅为标记，待删 */
    /* border: 1px solid #DDDDDD; */
  }
  /* 顶部选项卡位置 */
  #shop-tab {
    position: absolute;
    top: 24vh;
    left: 0;
    width: 100%;
    /* 仅为标记，待删 */
    border: 1px solid #DDDDDD;
  }
</style>
