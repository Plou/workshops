window.Configurator = function (layers, activeLayersId, layerView, activeLayerView) {
  this.layers = layers
  this.activeLayersId = activeLayersId.sort()
	this.$layerView = document.querySelector('#activeLayers')
	this.$switchView = document.querySelector('#layers')


  this.toggleSwitch = this.toggleSwitch.bind(this)
  this.bindSwitches()
}

Configurator.prototype.render = function () {
  console.log(this.activeLayersId);

	this.$layerView.innerHTML = ''
	this.$switchView.innerHTML = ''
	this.createLayers(this.activeLayersId.sort())
  this.createSwitches(this.layers)
}

Configurator.prototype.createLayers = function (layersId) {
  layersId.forEach(layerId => {
    const $layer = this.createLayer(this.layers[layerId])
    this.$layerView.append($layer)
  })
}

Configurator.prototype.createSwitches = function (layers) {
  for (const layerId in layers) {
		const $layer = this.createLayer(this.layers[layerId])
		this.$switchView.append($layer)
	}
}

Configurator.prototype.createLayer = function (layer) {
  $layer = document.createElement('li')
  $layer.dataset.layerId = layer.id
  $layer.innerHTML = layer.id
  return $layer
}


//Events
Configurator.prototype.bindSwitches = function () {
	this.$switchView.addEventListener('click', this.toggleSwitch)
}

//Helpers
Configurator.prototype.getLayerId = function (element) {
  return parseInt(element.dataset.layerId)
}

// State management
Configurator.prototype.toggleSwitch = function (e) {
	const layerId = this.getLayerId(e.target)
  if (layerId) {
    this.activeLayersId.includes(layerId) ? this.disableLayer(layerId) : this.enableLayer(layerId)
  }
}

Configurator.prototype.enableLayer = function (layerId) {
	this.activeLayersId.push(layerId)
  //update DOM (either via update event or by function call)
  this.render()
}

Configurator.prototype.disableLayer = function (layerId) {
  this.activeLayersId = this.activeLayersId.filter(id => id !== layerId)
  this.render()
	//update DOM (either via update event or by function call)
}
