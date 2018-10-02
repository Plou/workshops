# Initiation web
AppChat


## HTML

### Balises & attributs

``` html
<html>
  <body>
    <img src="http://plou.io/img/logo.png" widht="42" height="42" alt="AppChat">
    <h1>AppChat</h1>
    <p>Messagerie instantannée</p>

    <h2>HTML</h2>
    <p>Nous commencerons par fabriquer la structure html de notre application.</p>

    <h2>CSS</h2>
    <p>Ensuite nous allons la mettre en page.</p>

    <h2>JS</h2>
    <p>Et pour finir nous la ferons fonctionner</p>
  </body>
</html>
```

### AppChat
La structure du chat

``` html
    <img src="http://plou.io/img/logo.png" widht="128" height="128" alt="AppChat">
    <h1>AppChat</h1>
    <ul>
      <li>
        <p>author</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et illum omnis.</p>
      </li>
      <li>
        <p>author</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et illum omnis.</p>
      </li>
      <li>
        <p>author</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et illum omnis.</p>
      </li>
    </ul>
```

## CSS

``` css
  * { box-sizing: border-box; }

  body {
    font-family: "Avenir Next", sans-serif;
    line-height: 1.4;
  }

  input { font-family: "Avenir Next", sans-serif; }

  .container {
    margin: auto;
    padding: 20px;
    max-width: 700px;
  }

  .header {
    height: 250px;
    text-align: center;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 40px;
    font-weight: lighter;
  }

  p {
    font-size: 18px;
  }

  .chat {
    position: relative;
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 0;
    padding-bottom: 40px;
    height: calc(100vh - 270px);
    background: #eff2f5;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.1);
  }

  .messages {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
    transition: opacity .5s;
  }

  .messages.is-loading {
    opacity: .3;
  }

  .message {
    margin: 15px;
    max-width: 70%;
  }

  .message .author {
    margin: 0;
    color: #848484;
  }

  .message .body {
    margin: 0;
    border-radius: 2px;
    padding: 10px;
    background-color: #ffa229;
    box-shadow: inset 0 0 5px 0 rgba(0,0,0,0.1);
    color: white;
  }

  .message.is-me {
    margin-left: auto;
  }

  .message.is-me .body {
    background-color: #47cf73;
  }
  .message.is-me .author {
    text-align: right;
  }

  #chat-input {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border: none;
    padding: 5px 10px;
    width: 100%;
    height: 40px;
  }

  #chat-input:focus {
    outline: none;
  }
```


``` html
<html>
  <body>
    <div class="header">
      <div class="container">
        <img src="http://plou.io/img/logo.png" widht="128" height="128" alt="AppChat">
        <h1>AppChat</h1>
        <p>Messagerie instantannée</p>
      </div>
    </div>

    <div class="chat container">
      <ul class="messages">
        <li class="message">
          <p class="author">Auteur</p>
          <p class="body">Corps du message</p>
        </li>
        <li class="message">
          <p class="author">Auteur</p>
          <p class="body">Sapiente et illum omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </li>
        <li class="message is-me">
          <p class="author">Auteur</p>
          <p class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et illum omnis</p>
        </li>
      </ul>
    </div>
  </body>
</html>
```


## JS

### Select and listen

``` html
  <div class="chat container">
    <ul id="chat-view" class="messages">
      <!-- […] -->
    </ul>
    <input id="chat-input" placeholder="Écrivez un message…" type="text">
  </div>
```

``` Javascript
  // Select an element (node)
  var chatInput = document.querySelector("#chat-input")

  // Listen for event
  chatInput.addEventListener("keypress", function(e) {
    console.log(chatInput.value)
  })
```

### Listen for input

``` Javascript
  var chatInput = document.querySelector("#chat-input")

  chatInput.addEventListener("keypress", function(e) {
    var key = e.keyCode
    if (key === 13) {
      console.log({ author: author, body: chatInput.value })
      chatInput.value = ''
    }
  })
```

### Ajouter un message à la liste

``` Javascript
  var chatView = document.querySelector("#chat-view")

  // Add a message to chat list
  function addMessage(message) {
    const element = document.createElement("li")
    element.classList.add("message")
    element.classList.add("is-me")
    element.innerHTML = `<p class="body">${message.body}</p>`
  }
```


### Gérer l'auteur

``` Javascript
  var author = "Clément"

  // Add a message to chat list
  function addMessage(message) {
    const element = document.createElement("li")
    element.classList.add("message")

    if (message.author != author) {
      element.classList.add("is-me")
    }

    element.innerHTML = `
      <p class="author">${message.author}</p>
      <p class="body">${message.body}</p>
    `;
  }
  chatView.appendChild(element);
```


### Gérer le scroll

```Javascript
  var shouldScrollBottom = chatView.scrollTop + chatView.offsetHeight >= chatView.scrollHeight;
  chatView.appendChild(element);

  if (shouldScrollBottom) {
    chatView.scrollTop = chatView.scrollHeight;
  }
```

### Local Storage
``` Javascript
  var messageList = localStorage.getItem('messages')

  if (messageList) {
    messageList = JSON.parse(messageList)
  }
  else {
      messageList = []
  }

  messageList.map(addMessage)

  chatInput.addEventListener("keypress", function(e) {
    var key = e.keyCode
    if (key === 13) {
      postMessage({ author: author, body: chatInput.value })
      addMessage({ author: author, body: chatInput.value })
      chatInput.value = ''
    }
  })

  function postMessage(message) {
    localStorage.setItem('messages', JSON.stringify(messageList))
  }

  function addMessage(message) {
    messageList.push(message)
  }

```


### mongodb

``` Javascript
  var messageList;

  getMessages()

  function getMessages() {
    chatView.classList.add('is-loading')
    fetch('https://api.mlab.com/api/1/databases/appchat/collections/messages?apiKey=bZq6JeaRlSjpukPqJUIS4kd5kGndIqzE')
      .then((data) => data.json())
      .then((messages) => {
        if (messages) {
          messageList = messages
          messageList.map(addMessage)
        }
        chatView.classList.remove('is-loading')
        chatView.scrollTop = chatView.scrollHeight;
      })
  }

  function postMessage(message) {
    messageList.push(message)

    fetch("https://api.mlab.com/api/1/databases/appchat/collections/messages?apiKey=bZq6JeaRlSjpukPqJUIS4kd5kGndIqzE", {
      body: JSON.stringify(message),
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
```

### Gestion de l'auteur
``` html
  <input id="author-input" placeholder="Votre nom…" type="text">
```

```css
  #author-input,
  #chat-input {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border: none;
    padding: 5px 10px;
    width: 100%;
    height: 40px;
  }

  #author-input:focus,
  #chat-input:focus {
    outline: none;
  }

  #author-input.has-author {
    display:none;
  }
```

``` Javascript
  var authorInput = document.querySelector("#author-input")
  if (author) authorInput.classList.add('has-author')

  authorInput.addEventListener("keypress", function(e) {
    var key = e.keyCode
    if (key === 13) {
      author = authorInput.value
      authorInput.classList.add('has-author')
      checkAuthor()
    }
  });

  function checkAuthor() {
    var messages = document.querySelectorAll('.message')
      for (var message of messages) {
      if (message.dataset.author == author) {
        message.classList.add('is-me')
      }
      else {
        message.classList.remove('is-me')
      }
    }
  }
```


### Get new messages

``` Javascript
setInterval(getMessages, 1000)

function getMessages() {
  fetch('https://api.mlab.com/api/1/databases/appchat/collections/messages?apiKey=bZq6JeaRlSjpukPqJUIS4kd5kGndIqzE')
    .then((data) => data.json())
    .then((messages) => {
      if (messages) {
        messageList = messages
        messageList.map(function(message) {
          if(!document.querySelector(`[data-oid="${message._id.$oid}"]`)) addMessage(message)
        })
      }
      checkAuthor()
      chatView.classList.remove('is-loading')
    })
}

function postMessage(message) {
  messageList.push(message)

  fetch("https://api.mlab.com/api/1/databases/appchat/collections/messages?apiKey=bZq6JeaRlSjpukPqJUIS4kd5kGndIqzE", {
    body: JSON.stringify(message),
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(getMessages)
}

function addMessage(message) {

  element.dataset.oid = message._id.$oid

}


chatInput.addEventListener("keypress", function(e) {
  var key = e.keyCode
  if (key === 13) {
    postMessage({ author: author, body: chatInput.value })
    chatInput.value = ''
  }
});

```
