// # AppChat
// Sync a message list between the DOM & a database

// ## Set up the view to list messages, the author to use, the message refresh rates & the database endpoint
window.AppChat = function($view, author, tic = 200, endpoint = 'https://api.mlab.com/api/1/databases/appchat/collections/messages?apiKey=bZq6JeaRlSjpukPqJUIS4kd5kGndIqzE') {
  this.$view = $view
  this.author = author
  this.tic = tic
  this.endpoint = endpoint

  this.start = this.start.bind(this)
  this.stop = this.stop.bind(this)
  this.getMessages = this.getMessages.bind(this)
  this.postMessage = this.postMessage.bind(this)
  this.setAuthor = this.setAuthor.bind(this)
  this.checkAuthor = this.checkAuthor.bind(this)
  this.addMessage = this.addMessage.bind(this)
  return this
}


// ## start
// Check for messages each tic & add them to the list (default 200ms)
AppChat.prototype.start = function () {
  return this.getMessages()
    .then((messages) => {
      messages.map(this.addMessage)
      return messages
    })
    .then((messages) => {
      this.timeout = setTimeout(this.start, this.tic)
      return messages
    })
}

// ## stop
// Stop message auto fetching
AppChat.prototype.stop = function () {
  clearTimeout(this.timeout)
  return this
}

// ## getMessages
// get all messages from the database (endpoint)
AppChat.prototype.getMessages = function () {
  return fetch(this.endpoint)
    .then((data) => data.json())
}

// ## postMessage
// Post a message to the database (endpoint)
AppChat.prototype.postMessage = function (message) {
  return fetch(this.endpoint, {
    body: JSON.stringify(message),
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

// ## addMessage
// Add a message to the chat list (view)
AppChat.prototype.addMessage = function (message) {
  // Check if the message is already in the DOM
  if(document.querySelector(`[data-oid="${message._id.$oid}"]`)) {
    return message
  }

  // Create the element
  const element = document.createElement("div");
  element.classList.add("message");
  element.dataset.oid = message._id.$oid
  element.dataset.author = message.author


  // Check the author
  if (message.author == this.author) {
    element.classList.add("is-me")
  }

  // Add the content
  element.innerHTML = `
    <p class="author">${message.author}</p>
    <p class="body">${message.body}</p>
  `

  // Check if we need to scroll the view
  var shouldScrollBottom = this.$view.scrollTop + this.$view.offsetHeight >= this.$view.scrollHeight

  // Add the message to the list
  this.$view.appendChild(element)

  if (shouldScrollBottom) {
    // Scroll the last message into view
    this.$view.scrollTop = this.$view.scrollHeight;
  }

  return message
}

// ## setAuthor
AppChat.prototype.setAuthor = function (author) {
  this.author = author
  return author
}

// ## checkAuthor
// Parse the messages to add the author class
AppChat.prototype.checkAuthor = function () {
  var messages = document.querySelectorAll('.message')
    for (var message of messages) {
    if (message.dataset.author == this.author) {
      message.classList.add('is-me')
    }
    else {
      message.classList.remove('is-me')
    }
  }
  return this
}
