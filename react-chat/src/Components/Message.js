import React, { Component } from 'react';

class Message extends Component {
  render() {
    const {timestamp, text, userAvatar, userName} = this.props.details
    const {isOurs} = this.props
    return (
      <li className="message" data-timestamp={timestamp} data-is-ours={isOurs}>
        <p className="message-text">
          <img className="message-user" src={userAvatar} alt={userName}/>
          {text}
        </p>
      </li>
    )
  }
}

export default Message
