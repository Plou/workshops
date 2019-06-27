<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <LayerView v-bind:layers="layers" v-bind:activeLayers="activeLayers" v-on:toggleLayer="toggleLayer"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import LayerView from '@/components/LayerView.vue'

  export default {
    name: 'app',
    components: {
      LayerView
    },
    computed: {
      activeLayers: function () {
        return this.activeLayersId.map(id => this.layers[id]).sort((current, next) => current.id > next.id)
      },
      // map this.count to store.state.count
      // mix this into the outer object with the object spread operator
      ...mapState(['layers', 'activeLayersId'])
    },
    methods: {
      toggleLayer: function (layerId) {
        this.$store.commit('toggleLayer', {layerId: layerId})
      }
    },
    created () {
      this.$store.dispatch('getLayers')
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Inter', Futura, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 200;
  font-size: 160%;
  color: #2c3e50;
}
</style>
