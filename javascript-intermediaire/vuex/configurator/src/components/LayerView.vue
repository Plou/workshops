<template>
  <div class="layers">
    <h3>Layers</h3>
    <ul>
      <li class="switch"
        v-for="layer in layers"
        v-bind:key="'layer-'+layer.id"
        v-on:click="$emit('toggleLayer', layer.id)"
      >
        {{layer.id}}
      </li>
    </ul>
    <h3>Active layers </h3>
    <ul>
      <li v-for="layer in activeLayers" :key="'activeLayer-'+layer.id">
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
  font-weight: 400;
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
.switch {
  cursor: pointer;
}
a {
  color: #42b983;
}

</style>
