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
  },
  computed: {
    isFinish () {
      return (this.$store.state.goods.length !== 0 &&
      this.$store.state.shop.length !== 0)
    }
  },
  mounted: function () {
    if (this.$store.state.goods.length === 0 ||
      this.$store.state.shop.length === 0) {
      this.$indicator.open({spinnerType: 'fading-circle'})
    }
    // 获取商家信息
    this.$store.dispatch('getShop')
    // 获取菜单信息
    this.$store.dispatch('getMenu')
    // 设置桌号
    this.$store.dispatch('setTableNum', {
      tableID: this.$route.params.tableID
    })
  },
  watch: {
    // 如果 `isFinish` 发生改变，这个函数就会运行
    isFinish: function (newStatus, oldStatus) {
      if (newStatus === false) {
        // 显示加载圈
        this.$indicator.open({spinnerType: 'fading-circle'})
      } else {
        // 消除加载圈
        this.$indicator.close()
      }
    }
  }
}
</script>

<style scope>
  /* 搜索框位置 */
  #search-bar {
    position: absolute;
    top: 20vh;
    left: 0;
  }
  /* 顶部选项卡位置 */
  #shop-tab {
    position: absolute;
    top: 24vh;
    left: 0;
    width: 100vw;
  }
</style>
