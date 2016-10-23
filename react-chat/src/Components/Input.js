import React, { Component } from 'react';

class Input extends Component {
  createMessage(event) {

    event.preventDefault()
    const message = {
      timestamp: Date.now(),
      userId: this.props.user.id,
      userName: this.props.user.name,
      userAvatar: this.props.user.avatar,
      text: this.textInput.value,
    }
    this.props.addMessage(message)
    this.messageForm.reset()
  }

  render() {
    return (
      <form ref={(input) => this.messageForm = input} className="inputForm" onSubmit={this.createMessage.bind(this)}>
        <input type="text" required placeholder="" defaultValue="" ref={(input) => {this.textInput = input}} />
      </form>
    )
  }
}

export default Input
