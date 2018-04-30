<!-- 顶部选项卡 -->
<template>
<div>
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">点菜</mt-tab-item>
    <mt-tab-item id="2">评价</mt-tab-item>
    <mt-tab-item id="3">商家</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <index-list></index-list>
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
import indexList from '@/components/index-list/food-list'
export default {
  name: 'page-navbar',
  components: {
    indexList
  },
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style>
  /* 选项卡字体 */
  .mint-tab-item-label {
      font-size: 1.0rem;
  }
</style>
