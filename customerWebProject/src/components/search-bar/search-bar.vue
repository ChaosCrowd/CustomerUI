<!-- 搜索栏 -->
<template>
  <div class="search-bar">
    <mt-cell title="搜索" is-link to="search">
      <img slot="icon" src="@/assets/search1.png" width="20" height="20">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scope>
  .search-bar {
    width: 100vw;
    height: 4vh;
  }
  .search-bar .mint-cell {
    min-height: 0;
  }
  .search-bar .mint-cell-title {
    text-align: left;
    line-height: 4vh;
  }
</style>
