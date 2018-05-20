<!-- 搜索栏 -->
<template>
  <mt-search
  class="search"
  v-model="value"
  cancel-text=""
  placeholder="搜索">
  </mt-search>
</template>

<style scope>
  /* 去除搜索框灰色边框和背景 */
  .mint-searchbar {
    padding: 0;
    background-color: white;
  }
  /* “取消”字样 */
  .mint-searchbar-cancel {
    line-height: 0;
    padding: 0;
    font-size: 0.85rem;
  }
  /* 输入框内部高度 */
  .mint-searchbar-inner {
    height: 4vh;
  }
</style>
