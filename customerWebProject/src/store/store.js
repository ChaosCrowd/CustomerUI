import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const routeBase = 'http://139.199.71.21:8080'
const store = new Vuex.Store({
  state: {
    // 桌号
    tables_number: 0,
    // 订单总价
    totalPrice: 0,
    // 已选菜式数量
    totalNum: 0,
    // 菜单
    menu: [],
    // 所有菜品
    goods: [],
    // 商家信息
    shop: []
  },
  getters: {
    // 方便通过id进行查询
    getGoodByID: (state) => (id) => {
      return state.goods.find(good => good.id === id)
    },
    // 查询有该字段的菜
    searchGoodsByName: (state) => (name) => {
      if (name === '') return []
      return state.goods.filter(good => good.name.indexOf(name) !== -1)
    }
  },
  mutations: {
    // 增加某样菜
    increaseFood (state, payload) {
      state.totalNum += 1
      state.totalPrice += payload.foodPrice
      state.goods.find(good => good.id === payload.foodID).num += 1
    },
    // 减少某样菜
    decreaseFood (state, payload) {
      state.totalNum -= 1
      state.totalPrice -= payload.foodPrice
      state.goods.find(good => good.id === payload.foodID).num -= 1
    },
    // 根据菜单数据建立菜品集合，便于实现菜品数量的监控和数据获取
    initMenuAndGoods (state, payload) {
      state.menu = payload.menu
      for (var i in state.menu) {
        for (var j in state.menu[i].goods) {
          var good = state.menu[i].goods[j]
          // 如果goods数组没有id与之相同的对象，则不添加，否则添加到goods
          if (!state.goods.find(function (x) {
            return x.id === good.id
          })) {
            // 新建对象存入goods
            state.goods.push({
              id: good.id,
              name: good.name,
              num: 0,
              desc: good.desc,
              price: good.price,
              img_src: good.img_src,
              volume: good.volume
            })
          }
        }
      }
    },
    // 清空购物车
    clearFood (state) {
      state.totalNum = 0
      state.totalPrice = 0
      for (var i in state.goods) {
        state.goods[i].num = 0
      }
    },
    // 用获取的信息初始化商家信息shop
    initShop (state, payload) {
      state.shop = payload.shop
    },
    // 设置桌号
    setTableNum (state, payload) {
      state.tables_number = payload.tableID
    }
  },
  actions: {
    // 获取菜单数据，未处理异常情况
    getMenu (context) {
      axios
        .get(routeBase + '/ordering/api/v1/menu')
        .then(response => (context.commit('initMenuAndGoods', {
          msg: response.data.msg,
          menu: response.data.data
        })))
        .catch(error => console.log(error))
    },
    // 获取商家信息
    getShop (context) {
      axios
        .get(routeBase + '/ordering/api/v1/shop')
        .then(response => (context.commit('initShop', {
          msg: response.data.msg,
          shop: response.data.data
        })))
        .catch(error => console.log(error))
    },
    // 提交订单, 未处理异常情况，可能不应该写在这里吧。。
    uploadOrder (context) {
      console.log('start uploading')
      var foods = []
      for (var x in context.state.goods) {
        if (context.state.goods[x].num > 0) {
          var foodInfo = {
            goods_id: context.state.goods[x].id,
            count: context.state.goods[x].num
          }
          foods.push(foodInfo)
        }
      }
      axios
        .post(routeBase + '/ordering/api/v1/order', {
          tables_number: context.state.tables_number,
          timestamp: Date.now(),
          order: foods
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    },
    // 添加某样菜
    increaseFood (context, payload) {
      context.commit('increaseFood', payload)
    },
    // 减少某样菜
    decreaseFood (context, payload) {
      context.commit('decreaseFood', payload)
    },
    // 清空购物车
    clearFood (context) {
      context.commit('clearFood')
    },
    // 设置桌号
    setTableNum (context, payload) {
      context.commit('setTableNum', payload)
    }
  }
})
export default store
