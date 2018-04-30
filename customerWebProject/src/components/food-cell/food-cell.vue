<!-- 餐厅首页食物列表中的每个食物选项 -->
<template>
  <mt-cell title="名称" label="描述信息" id="cell">
      <img slot="icon" src="@/assets/logo.png" id="icon">
      <img src="@/assets/blue-add.png" id="add">
  </mt-cell>
</template>

<style>
  #cell {
    height: 30vw;;
  }
  #icon {
    width: 25vw;
    height: 25vw;
    position: absolute;
    left: 0;
    margin-top: 1.5vw;
    margin-left: 1.5vw;
  }
  #add {
      width: 6vw;
      height: 6vw;
      position: absolute;
      right: 2.5vw;
      bottom: 2.5vw;
      margin: auto;
  }
  .mint-cell-text {
      display: block;
      margin-top: 7vw;
  }
</style>
