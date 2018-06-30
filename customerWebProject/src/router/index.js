import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/restaurant-home/restaurant-home'
import foodinfo from '@/components/food-info/food-info'
import pagepay from '@/components/page-pay/page-pay'
import search from '@/components/search-real/search-real'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table/:tableID',
      name: 'RestaurantHome',
      // 0
      // meta: {index: 0},
      component: home
    },
    {
      path: '/foodinfo/:fid',
      name: 'foodinfo',
      // 2
      // meta: {index: 2},
      component: foodinfo
    },
    {
      path: '/pagepay',
      name: 'pagepay',
      // 3
      // meta: {index: 3},
      component: pagepay
    },
    {
      path: '/search',
      name: 'Search',
      // 1
      // meta: {index: 1},
      component: search
    }
  ]
})
