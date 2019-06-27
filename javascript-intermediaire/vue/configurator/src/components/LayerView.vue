<template>
  <div class="layers">
    layers :
    <ul v-for="layer in layers" v-bind:key="'layer-'+layer.id">
      <li v-on:click="$emit('toggleLayer', layer.id)">
        {{layer.id}}
      </li>
    </ul>
    activeLayers :
    <ul v-for="layer in activeLayers" :key="'activeLayer-'+layer.id">
      <li>
        {{layer.id}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LayerView',
  props: {
    layers: Object,
    activeLayers: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  padding: 5px 30px;
  margin: 0 10px;
  background-color: #42b983;
  color: white;
}
a {
  color: #42b983;
}
</style>
