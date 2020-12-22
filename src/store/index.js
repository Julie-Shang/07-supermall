import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import modules from "./modules"

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
//3.挂载到Vue实例
const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

export default store