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
  import LayerView from '@/components/LayerView.vue'


  export default {
    name: 'app',
    components: {
      LayerView
    },
    data: function () {
      return {
        layers: {1: {id: 1},3: {id: 3}, 2: {id: 2}},
        activeLayersId: [3, 1]
      }
    },
    computed: {
      activeLayers: function () {
        return this.activeLayersId.map(id => this.layers[id]).sort((current, next) => current.id > next.id)
      }
    },
    methods: {
      toggleLayer: function (layerId) {
        this.activeLayersId.includes(layerId) ? this.disableLayer(layerId) : this.enableLayer(layerId)
      },

      enableLayer: function (layerId) {
        this.activeLayersId.push(layerId)
      },

      disableLayer: function (layerId) {
        this.activeLayersId = this.activeLayersId.filter(id => id !== layerId)
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
