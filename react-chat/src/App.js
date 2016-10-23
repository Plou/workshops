import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import base from './base'

import './App.css';
import logo from './logo.svg';
// import sampleMessages from './sample-messages';

import Message from './Components/Message';
import Input from './Components/Input';


class App extends Component {
  constructor () {
    super()
    this.state = {
      messages: {},
      user: {}
    }

    this.addMessage = this.addMessage.bind(this)
  }

  addMessage(message) {
    const messages = {...this.state.messages}
    messages[`message-${message.timestamp}`] = message

    this.setState({ messages })
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.roomId}/messages`
      , {
        context: this,
        state: 'messages'
      })

      // if (Object.keys(this.state.messages).length < 1) {
      //   this.setState({
      //     messages: sampleMessages
      //   })
      // }

    const localStorageRef = localStorage.getItem('user-current')
    if(localStorageRef){
      this.setState({
        user: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  componentDidMount () {
    this.node = findDOMNode(this);
    this.node.scrollTop = this.node.scrollHeight
  }

  componentWillUpdate () {
    this.shouldScrollBottom = this.node.scrollTop + this.node.offsetHeight === this.node.scrollHeight;
  }

  componentDidUpdate () {
    if (this.shouldScrollBottom) {
      this.node.scrollTop = this.node.scrollHeight
    }
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.params.roomId}</h2>
        </div>
        <ul className="messages">
          {
            Object.keys(this.state.messages)
            .sort((p, n) => this.state.messages[p].timestamp > this.state.messages[n].timestamp)
            .map(key => {
              return (
                <Message key={key} index={key} details={this.state.messages[key]} isOurs={this.state.messages[key].userId === this.state.user.id}/>
              )
            })
          }
        </ul>
        <Input user={this.state.user} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
