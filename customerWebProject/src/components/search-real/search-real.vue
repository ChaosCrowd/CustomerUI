<!-- 搜索页面 -->
<template>
  <div class="search-real">
    <img src="@/assets/back4.png" v-on:click="goback" class="search-backButton">
    <mt-search
    v-model="value"
    class="search"
    cancel-text=""
    placeholder="搜索">
      <food-cell v-for="good in result" :key="good.id" v-bind:id="good.id"></food-cell>
    </mt-search>
    <p id="notFoundMsg" v-if="!result.length && value.length !== 0">{{ notFoundInfo }}</p>
    <cart-footer v-if="result.length !== 0"></cart-footer>
  </div>
</template>

<script>
import foodCell from '@/components/food-cell/food-cell'
import cartFooter from '@/components/cart-footer/cart-footer'
export default {
  name: 'SearchBar',
  data () {
    return {
      value: '',
      notFoundInfo: '没有搜索到相关菜品'
    }
  },
  components: {
    foodCell,
    cartFooter
  },
  computed: {
    result () {
      return this.$store.getters.searchGoodsByName(this.value)
    }
  },
  methods: {
    goback () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  // 生命周期钩子
  mounted: function () {
    if (this.$store.state.goods.length === 0 &&
    window.sessionStorage.getItem('state')) {
      this.$store.dispatch('loadLocalState',
        JSON.parse(window.sessionStorage.getItem('state')))
    }
  }
}
</script>

<style scope>
  /* 未找到结果的显示 */
  #notFoundMsg {
    position: absolute;
    width: 100vw;
    top: 15vw;
    text-align: center;
    font-size: 5vw;
  }
  /* 去除搜索框灰色边框和背景 */
  .search .mint-searchbar {
    margin-left: 12vw;
    margin-right: 12vw;
    background-color: white;
    height: 12vw;
    position: relative;
    top: 1vw;
    border: 2px gray solid;
    border-radius: 6vw;
  }
  /* “取消”字样 */
  .search .mint-searchbar-cancel {
    line-height: 0;
    padding: 0;
    font-size: 0.85rem;
  }
  /* 输入框内部高度 */
  .search .mint-searchbar-inner {
    height: 7vw;
    padding: 0;
  }
  /* 使搜索栏置顶 */
  .search .mint-search-list {
    padding: 0;
    top: 1vw;
    position: relative;
    max-height: 85vh;
  }
  .search-real .mint-search {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .search-real {
    padding: 0;
    width: 100%;
    height: 100%;
  }
  /* 返回按钮置于左上角 */
  .search-backButton {
    z-index: 1;
    position: absolute;
    background: white;
    width: 12vw;
    height: 12vw;
    top: 1vw;
    left: 0;
  }
  /* 放大镜图标 */
  .search-real .mint-searchbar-inner .mintui-search {
    font-size: 5vw;
  }
  /* 搜索字样的大小 */
  .search-real .mint-searchbar-core {
    font-size: 4vw;
  }
  /* 将底部栏的fixed改为absolute,解决输入法导致底部栏上移问题 */
  .search-real #bottom-bar {
    position: absolute;
  }
</style>
