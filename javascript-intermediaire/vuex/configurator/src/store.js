import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = {
  getLayers: () => {
    return fetch('https://next.json-generator.com/api/json/get/E18O9aTyP')
    .then(data => data.json())
    .catch(console.error)
  },
}

export default new Vuex.Store({
  state: {
      layers: {1: {id: 1},3: {id: 3}, 2: {id: 2}},
      activeLayersId: [3, 1]
  },
  // Update the state
  // Synchronous
  mutations: {
    layers: function(state, layers) {
      state.layers = layers
    },
    toggleLayer: function (state, payload) {
      state.activeLayersId.includes(payload.layerId) ? this.commit('disableLayer', {layerId: payload.layerId}) : this.commit('enableLayer', {layerId: payload.layerId})
    },
    enableLayer: function (state, payload) {
      state.activeLayersId.push(payload.layerId)
    },
    disableLayer: function (state, payload) {
      state.activeLayersId = this.state.activeLayersId.filter(id => id !== payload.layerId)
    }
  },
  // Do stuff then commit('mutation')
  // Asynchronous
  actions: {
    async getLayers({commit}) {
      const layers = await api.getLayers()
      console.log(layers);

      commit('layers', layers)
    }
  }
})
