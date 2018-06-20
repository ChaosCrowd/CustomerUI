import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import header from '@/components/page-header/page-header'
// import searchBar from '@/components/search-bar/search-bar'
import home from '@/components/restaurant-home/restaurant-home'
// import indexList from '@/components/index-list/food-list'
// import app from '@/components/app.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RestaurantHome',
      component: home
    }
  ]
})
