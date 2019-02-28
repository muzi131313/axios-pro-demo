import Vue from 'vue'
import Vuex from 'vuex'

import org from './modules/org'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    org
  }
})
