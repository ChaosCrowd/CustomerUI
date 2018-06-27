<!-- 菜品列表 -->
<template>
  <mt-index-list :show-indicator=false>
    <mt-index-section v-for="item in menuData" :index="item.category.name" :key="item.category.id">
      <!-- 用类别和菜品的id组合作为key，保证唯一性 -->
      <food-cell v-for="good in item.goods" :key="good.id" v-bind:id="good.id"></food-cell>
    </mt-index-section>
  </mt-index-list>
</template>

<style scope>
  /* 设置侧边索引（栏目） */
  .mint-indexlist-nav {
    left: 0;
    right: 100%;
    width: 20%;
  }
  .mint-indexlist-navitem {
    padding: 2.5vh 2vw;
    font-size: 0.85rem;
    /* 标明边界 */
    border: 1px solid #DDDDDD;
  }
  .mint-indexlist-navlist {
    /* 使左侧索引能独立拉动 */
    overflow-y: auto;
  }
  /* 菜品列表 */
  .mint-indexlist-content {
    position: relative;
    left: 20%;
    height: 100% !important;
  }
  /* 列表中的索引 */
  .mint-indexsection-index {
    padding: 0;
    text-align: left;
    margin-left: 2.6vw;
  }
</style>

<script>
import foodCell from '@/components/food-cell/food-cell'
export default {
  name: 'FoodList',
  computed: {
    menuData: function () {
      return this.$store.state.menu
    }
  },
  // 使用其它组件
  components: {
    foodCell
  },
  // 获取菜单信息
  mounted: function () {
    this.$store.dispatch('getMenu')
  },
  // 方法
  methods: {
    getGoodByID (id) {
      alert(id)
      return this.$store.getters.getGoodByID(id)
    }
  }
}
</script>
