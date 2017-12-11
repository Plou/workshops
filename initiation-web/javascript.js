var author = localStorage.getItem('author')

var messageList = []

var chatView = document.querySelector("#chat-view")
var chatInput = document.querySelector("#chat-input")
var authorInput = document.querySelector("#author-input")
if (author) authorInput.classList.add('has-author')


chatView.classList.add('is-loading')
getMessages()
setInterval(getMessages, 200)

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


authorInput.addEventListener("keypress", function(e) {
  var key = e.keyCode
  if (key === 13) {
    author = authorInput.value
    authorInput.classList.add('has-author')
    localStorage.setItem('author', author)
    checkAuthor()
  }
});


chatInput.addEventListener("keypress", function(e) {
  var key = e.keyCode
  if (key === 13) {
    postMessage({ author: author, body: chatInput.value })
    chatInput.value = ''
  }
});

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



// Add a message to chat list
function addMessage(message) {

  const element = document.createElement("li");
  element.classList.add("message");
  element.dataset.oid = message._id.$oid
  element.dataset.author = message.author

  if (message.author == author) {
    element.classList.add("is-me")
  }

  element.innerHTML = `
    <p class="author">${message.author}</p>
    <p class="body">${message.body}</p>
  `

  var shouldScrollBottom = chatView.scrollTop + chatView.offsetHeight >= chatView.scrollHeight

  chatView.appendChild(element)

  if (shouldScrollBottom) {
    chatView.scrollTop = chatView.scrollHeight;
  }
}
