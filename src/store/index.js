import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from "./mutations"
import actions from "./actions"
import modules from "./modules"
import getters from "./getters"

export default new Vuex.Store({
  state: {

  },
  mutations,
  actions,
  modules,
  getters
})
