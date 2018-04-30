<!-- 餐厅首页 -->
<template>
    <div>
        <!-- 头部 -->
        <page-header></page-header>
        <!-- 搜索框 -->
        <search id="search-bar"></search>
        <!-- 顶部选项卡 -->
        <navbar id="nav-bar"></navbar>
    </div>
</template>
<script>
import pageHeader from '@/components/page-header/page-header'
import search from '@/components/search-bar/search-bar'
import navbar from '@/components/navbar/navbar'
import indexList from '@/components/index-list/food-list'
export default {
  components: {
    pageHeader,
    search,
    navbar,
    indexList
  }
}
</script>
<style>
  /* 搜索框位置 */
  #search-bar {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 4%;
    /* 仅为标记，待删 */
    border: 1px solid #DDDDDD;
  }
  /* 顶部选项卡位置 */
  #nav-bar {
    position: absolute;
    top: 24%;
    left: 0;
    width: 100%;
    /* 仅为标记，待删 */
    border: 1px solid #DDDDDD;
  }
</style>
