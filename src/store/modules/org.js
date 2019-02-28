/**
 * @file org.js
 * @desc {{description}}{{机构列表}}
 * @createTime 2019年02月28日14:59:28
 */
import axiosPro from 'axios-pro'

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    orgs: state => state.list
  },
  actions: {
    async getOrgs({ commit }, payload) {
      const resp = await axiosPro.api.queryOrg({
        jsonConditions: {
          op: 'or',
          elements: [
            {
              param: 'name',
              op: 'contains',
              values: '北京'
            }
          ]
        }
      })
      commit('SET_ORGS', resp.content)
    }
  },
  mutations: {
    SET_ORGS(state, payload) {
      state.list = payload
    }
  }
}
