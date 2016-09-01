window.zootrope = {

  init: function() {
    this.scene = document.querySelector('#zootrope')
    this.element = document.querySelector('#sprite')
    this.setSprite('dino')
  },

  sprites: {
    'dino': {
      src: 'sprites/dino.png',
      frames: 12,
      frame: {
        width: 193,
        height: 200
      }
    },
    'lion': {
      src: 'sprites/lion.png',
      frames: 16,
      frame: {
        width: 129,
        height: 129
      }
    },
    'braid': {
      src: 'sprites/braid.png',
      frames: 27,
      frame: {
        width: 129,
        height: 150
      }
    }
  },

  currentSprite: '',
  currentFrame: 0,
  status: 'stop',
  fps: 12,

  help: function() {
    let methods = Object.keys(this).filter((attribute) => {
      return typeof(this[attribute]) == 'function' && attribute.slice(0,1) != '_';
    })
    let attributes = Object.keys(this).filter((attribute) => {
      return typeof(this[attribute]) != 'function' && attribute.slice(0,1) != '_';
    })

    console.log('Voici les methodes disponibles : ' +methods.join(', ') + '.');
    console.log('Voici les attributs disponibles : ' +attributes.join(', ') + '.' );
  },

  list: function() {
    console.log('Voici les bandelettes disponibles : ' + Object.keys(this.sprites).join(', ') + '.');
  },

  play: function(sprite) {
    console.log('Démarre le zootrope');
    this.status = "playing"
    this.clock = setInterval( () => {
      if (this.currentFrame + 1 < this.sprite.frames) {
        this.currentFrame += 1
        this.element.style.left = - (this.currentFrame * this.sprite.frame.width) + 'px'
      }
      else {
        this.currentFrame = 0
        this.element.style.left = 0
      }
    }, 1000 / this.fps)
  },

  stop: function() {
    console.log('Arrète le zootrope et le remet à 0');

    this.status = "stopped"
    this.currentFrame = 0
    this.element.style.left = 0
    clearInterval(this.clock)
  },

  pause: function() {
    console.log('Met le zootrope en pause');

    this.status = "paused"
    clearInterval(this.clock)
  },

  speed: function(fps = this.fps) {
    const isPLaying = this.status

    this.pause()

    console.log('Change la vitesse d\'animation');
    this.fps = fps

    if (isPLaying == 'playing') {
      this.play()
    }
  },

  setSprite: function(sprite = this.currentSprite) {
    if (sprite != this.currentSprite) {
      this.currentSprite = sprite
      console.log('Change la bandelette : ' + this.currentSprite);
      this.sprite = this.sprites[this.currentSprite]
      this.element.setAttribute('src', this.sprite.src)
      this.scene.style.width = this.sprite.frame.width + 'px'
      this.scene.style.height = this.sprite.frame.height + 'px'
    }
  }


}

zootrope.init()
