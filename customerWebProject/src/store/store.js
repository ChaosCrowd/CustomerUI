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
    menu: 'Initial',
    // 已选的菜
    selectedFoods: {}
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
      console.log('after addtion: ', state.selectedFoods)
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
      console.log('after deletion: ')
      for (var x in state.selectedFoods) {
        console.log(x, state.selectedFoods[x])
      }
    }
  },
  actions: {
    // 获取菜单数据，未处理异常情况
    getMenu (context) {
      console.log('start fetching')
      axios
        .get('https://private-caa14-eatwelly.apiary-mock.com/api/v1/menu')
        .then(response => (context.state.menu = response.data))
        .catch(error => console.log(error))
    },
    // 提交订单, 未处理异常情况
    uploadOrder (context) {
      console.log('start uploading')
      var foods = []
      for (var x in context.state.selectedFoods) {
        if (context.state.selectedFoods[x] > 0) {
          var foodInfo = {
            goods_id: x,
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
    }
  }
})
export default store
