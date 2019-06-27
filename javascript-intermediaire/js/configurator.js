const layers = {1: {id: 1},3: {id: 3}, 2: {id: 2}}
let activeLayersId = [3, 1]

const $layerView = document.querySelector('#activeLayers')
const $switchView = document.querySelector('#layers')


const render = function () {
  console.log(activeLayersId);

	$layerView.innerHTML = ''
	$switchView.innerHTML = ''
	createLayers(activeLayersId.sort())
  createSwitches(layers)
}

const createLayers = function (layersId) {
  layersId.forEach(layerId => {
    const $layer = createLayer(layers[layerId])
    $layerView.append($layer)
  })
}

const createSwitches = function (layers) {
  for (const layerId in layers) {
		const $layer = createLayer(layers[layerId])
		$switchView.append($layer)
	}
}

const createLayer = function (layer) {
  $layer = document.createElement('li')
  $layer.dataset.layerId = layer.id
  $layer.innerHTML = layer.id
  return $layer
}


//Events
const bindSwitches = function () {
	$switchView.addEventListener('click', toggleSwitch)
}

//Helpers
const getLayerId = function (element) {
  return parseInt(element.dataset.layerId)
}

// State management
const toggleSwitch = function (e) {
	const layerId = getLayerId(e.target)
  if (layerId) {
    activeLayersId.includes(layerId) ? disableLayer(layerId) : enableLayer(layerId)
  }
}

const enableLayer = function (layerId) {
	activeLayersId.push(layerId)
  //update DOM (either via update event or by function call)
  render()
}

const disableLayer = function (layerId) {
  activeLayersId = activeLayersId.filter(id => id !== layerId)
  render()
	//update DOM (either via update event or by function call)
}

bindSwitches()
render()
