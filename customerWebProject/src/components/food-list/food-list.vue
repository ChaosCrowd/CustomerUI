<!-- 菜品列表 -->
<template>
  <mt-index-list :show-indicator=false>
  <mt-index-section index="热销">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="折扣">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="买赠">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="精选套餐">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="精选热菜">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="主食">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="甜点">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
  </mt-index-section>
  <mt-index-section index="饮料">
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
    <food-cell></food-cell>
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
  components: {
    foodCell
  }
}
</script>
