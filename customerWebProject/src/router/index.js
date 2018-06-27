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
      component: home
    },
    {
      path: '/foodinfo/:fid',
      name: 'foodinfo',
      component: foodinfo
    },
    {
      path: '/pagepay',
      name: 'pagepay',
      component: pagepay
    },
    {
      path: '/search',
      name: 'Search',
      component: search
    }
  ]
})
