# Plan

## Fabrication d'un configurateur

### Fondamentaux

- Do & Don't
- Architecture fonctionnelle
- Initialisation du configurateur
- Création du DOM
- Gestion des événements
- One-way data flow (state > view > actions)

### Prototypes et Classes

- Javascript Orienté Objet
- This (bind)

### Débrief et en route vers les modules

- Comment imaginer le découpage en composants
- Comment gérer les événements et les données communes (state) ?
- Mise à jour du DOM un peu bourrine

## VueJS (valable pour React)

### Découverte

- Installation
- Concepts
- Fabrication de notre composant configurator

### Factorisation

- Séparation en deux composants (boutons & visionneuse)
- Comment aller plus loin et gérer la complexité
- Comment gérer des actions asynchrones (API)

### Vuex (Redux)

- Gestion de la donnée globale
- Gérer les requêtes API
- Gestion des actions

## Si vous êtes sages (et rapides)

- Transitions et animation !
- Penser au future configurateur :
    - Découpler les boutons des calques (store.categories / store.layers)
    - gérer les états on/off des boutons (synchro de la donnée ou calcul ?)



# Vannila 
  - good practices
  - Draft (global functions)
  - Init
  - DOM
  - Events
  - One-way data flow

  - Prototype & Classes
  - `this`

  ```
    npm install -g parcel
  ```

# Vue installation

``` shell
  npm install -g @vue/cli
  vue create configurator (.vuerc)
```

# Configurator
  - [] Comment Router + Store
  - [] Rename HelloWorld -> LayerView
  - [] Use msg props to Greet the world
  - [] Create a mock layer object (data) and pass it to the component (props)
  - [] render all layers
  - [] render active layers
  - [] Use Vue extension to add/delete layers
  - [] use event emition to bubble up the toggleLayer event
  - [] enable/disable layers
  - [] Sort

# VueX
  - Create a Store
  - Move toggle methods to mutators
  - Get Layers async (json generator)



## Doc & plugins

## Vuex
https://vuejs.org/guide/  
https://vuejs.org/v2/api/

## Vuex
https://vuex.vuejs.org/guide/

## vuex-history
Undo/redo functionality for Vuex store.
https://github.com/yomotsu/vuex-history
