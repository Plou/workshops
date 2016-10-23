import React, {Component} from 'react'
import slugify from '../slugify'

class Connect extends Component {

  goToRoom(event) {
    event.preventDefault()
    const user = {
      id: slugify(this.nameInput.value),
      avatar: this.avatarInput.value || "http://unsplash.it/64/64?image=100",
      name: this.nameInput.value,
    }

    localStorage.setItem(`user-current`, JSON.stringify(user))

    this.context.router.transitionTo(`/room/${this.roomInput.value}`)
  }

  render() {
    return (
      <form className="connect" onSubmit={this.goToRoom.bind(this)}>
        <label htmlFor="">Nom</label>
        <input type="text" required placeholder="pseudo" defaultValue="" ref={(input) => {this.nameInput = input}} />
        <label htmlFor="">Avatar</label>
        <input type="text" placeholder="Lien vers une image" defaultValue="" ref={(input) => {this.avatarInput = input}} />
        <label htmlFor="">Canal de discussion</label>
        <input type="text" required placeholder="room" defaultValue="welcome" ref={(input) => {this.roomInput = input}} />
        <button type="submit">Connexion</button>
      </form>
    )
  }
}

Connect.contextTypes = {
  router: React.PropTypes.object
}

export default Connect
