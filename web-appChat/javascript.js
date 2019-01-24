// # AppChat
// Setup author name then start the app

// Require https://plou.io/workshops/web-appchat/AppChat.js


// ## Handle author name

// Get the author name from local storage
var author = localStorage.getItem('author')

// Get the author input
var authorInput = document.querySelector("#author-input")
// Hide the input if the author is already set
if (author) authorInput.classList.add('has-author')

// Listen to all keypress events on the author input
authorInput.addEventListener("keypress", function(e) {
  // If the key pressed is `Enter` (https://keycode.info/)
  if (e.keyCode === 13) {
    // Save the author name to the local storage
    localStorage.setItem('author', authorInput.value)

    // Tell AppChat the author name changed
    chat.setAuthor()
    // Check all message's authors
    chat.checkAuthor()

    // Hide the input
    authorInput.classList.add('has-author')
  }
});


// ## Start the app

// Set Author
// var author = "Clément"

// Get the message list and the chat input from the DOM
var chatView = document.querySelector("#chat-view")
var chatInput = document.querySelector("#chat-input")

// Tell the user the app is loading
chatView.classList.add('is-loading')

// Initilize the app
var chat = new AppChat(chatView, author)

// Start chat then remove the loading indicator
chat.start().then(() => {
  chatView.classList.remove('is-loading')
})

// Sends a new message when the user press `Enter`
// Listen to all keypress events on the chat input
chatInput.addEventListener("keypress", function(e) {
  // If the key pressed is `Enter` (https://keycode.info/)
  if (e.keyCode == 13) {
    // Post the new message
    chat.postMessage({ author: author, body: chatInput.value })
    // Reset the input
    chatInput.value = ''
  }
});
