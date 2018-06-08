import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import header from '@/components/page-header/page-header'
// import searchBar from '@/components/search-bar/search-bar'
import home from '@/components/restaurant-home/restaurant-home'
import foodinfo from '@/components/food-info/food-info'
import pagepay from '@/components/page-pay/page-pay'
// import indexList from '@/components/index-list/food-list'
// import app from '@/components/app.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: home,
      children: [
        {
          path: 'foodinfo',
          name: 'foodinfo',
          component: foodinfo
        }
      ]
    },
    {
      path: '/pagepay',
      name: 'pagepay',
      component: pagepay
    }
  ]
})
