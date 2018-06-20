import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

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
    // 已选的菜
    selectedFoods: {},
    // 包括已选数量的菜式类
    goods: []
  },
  getters: {
    // 方便通过id进行查询
    getGoodByID: (state) => (id) => {
      return state.goods.find(good => good.id === id)
    }
  },
  mutations: {
    // 增加某样菜
    increaseFood (state, payload) {
      state.totalNum += 1
      state.totalPrice += payload.foodPrice
      if (state.selectedFoods[payload.foodID]) {
        state.selectedFoods[payload.foodID] += 1
      } else {
        state.selectedFoods[payload.foodID] = 1
      }
      for (var x in state.goods) {
        if (state.goods[x].id === payload.foodID) {
          console.log('Before addtion: ', state.goods[x].num)
          state.goods[x].num += 1
          console.log('After addtion: ', state.goods[x].num)
          // console.log(this.getters.getGoodByID(payload.foodID))
          break
        }
      }
      // console.log('after addtion: ', state.selectedFoods)
    },
    // 减少某样菜
    decreaseFood (state, payload) {
      if (state.selectedFoods[payload.foodID]) {
        state.selectedFoods[payload.foodID] -= 1
        // console.log('before: ', state.totalPrice)
        state.totalPrice -= payload.foodPrice
        state.totalNum -= 1
      } else {
        console.log('error in food decreasement')
      }
      // console.log('after deletion: ')
      // for (var x in state.selectedFoods) {
      //   console.log(x, state.selectedFoods[x])
      // }
      for (var x in state.goods) {
        if (state.goods[x].id === payload.foodID) {
          console.log('Before decrement: ', state.goods[x].num)
          state.goods[x].num -= 1
          console.log('After decrement: ', state.goods[x].num)
          break
        }
      }
    },
    // 根据菜单数据建立菜品集合，便于实现菜品数量的监控和数据获取
    initMenuAndGoods (state, payload) {
      state.menu = payload.menu
      // console.log('state.menu: ', state.menu)
      for (var i in state.menu) {
        for (var j in state.menu[i].goods) {
          var good = state.menu[i].goods[j]
          good['num'] = 0
          // 如果goods数组没有id与之相同的对象，则不添加，否则添加到goods
          if (!state.goods.find(function (x) {
            return x.id === good.id
          })) {
            state.goods.push(good)
          }
        }
      }
      // console.log('First good:', this.getters.getGoodByID(1))
      console.log('state.goods: ', state.goods)
    }
  },
  actions: {
    // 获取菜单数据，未处理异常情况
    getMenu (context) {
      console.log('start fetching')
      axios
        .get('https://private-caa14-eatwelly.apiary-mock.com/api/v1/menu')
        .then(response => (context.commit('initMenuAndGoods', {
          msg: response.data.msg,
          menu: response.data.data
        })))
        .catch(error => console.log(error))
    },
    // 提交订单, 未处理异常情况
    uploadOrder (context) {
      console.log('start uploading')
      var foods = []
      for (var x in context.state.selectedFoods) {
        if (context.state.selectedFoods[x] > 0) {
          var foodInfo = {
            goods_id: Number(x),
            count: context.state.selectedFoods[x]
          }
          foods.push(foodInfo)
        }
      }
      console.log(foods)
      axios
        .post('https://private-caa14-eatwelly.apiary-mock.com/api/v1/order', {
          tables_number: context.state.tables_number,
          timestamp: Date.now(),
          order: foods
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    },
    increaseFood (context, payload) {
      context.commit('increaseFood', payload)
    }
  }
})
export default store
