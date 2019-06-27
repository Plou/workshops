class Configurator {
  constructor (layers, activeLayersId, layerView, activeLayerView) {

    this.layers = layers
    this.activeLayersId = activeLayersId.sort()
    this.$layerView = document.querySelector('#activeLayers')
    this.$switchView = document.querySelector('#layers')


    this.toggleSwitch = this.toggleSwitch.bind(this)
    this.bindSwitches()
  }

  render () {
    console.log(this.activeLayersId);

    this.$layerView.innerHTML = ''
    this.$switchView.innerHTML = ''
    this.createLayers(this.activeLayersId.sort())
    this.createSwitches(this.layers)
  }

  createLayers (layersId) {
    layersId.forEach(layerId => {
      const $layer = this.createLayer(this.layers[layerId])
      this.$layerView.append($layer)
    })
  }

  createSwitches (layers) {
    for (const layerId in layers) {
      const $layer = this.createLayer(this.layers[layerId])
      this.$switchView.append($layer)
    }
  }

  createLayer (layer) {
    $layer = document.createElement('li')
    $layer.dataset.layerId = layer.id
    $layer.innerHTML = layer.id
    return $layer
  }


//Events
  bindSwitches () {
    this.$switchView.addEventListener('click', this.toggleSwitch)
  }

//Helpers
  getLayerId (element) {
    return parseInt(element.dataset.layerId)
  }

// State management
  toggleSwitch (e) {
    const layerId = this.getLayerId(e.target)
    if (layerId) {
      this.activeLayersId.includes(layerId) ? this.disableLayer(layerId) : this.enableLayer(layerId)
    }
  }

  enableLayer (layerId) {
    this.activeLayersId.push(layerId)
    //update DOM (either via update event or by function call)
    this.render()
  }

  disableLayer (layerId) {
    this.activeLayersId = this.activeLayersId.filter(id => id !== layerId)
    this.render()
    //update DOM (either via update event or by function call)
  }
}

window.Configurator = Configurator
