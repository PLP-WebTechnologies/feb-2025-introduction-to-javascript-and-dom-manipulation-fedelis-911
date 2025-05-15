// 1. CHANGE TEXT CONTENT
// Get the paragraph and button elements
var textParagraph = document.getElementById('changeable-text');
var changeTextBtn = document.getElementById('text-changer');

// When button is clicked, change the text
changeTextBtn.onclick = function() {
  textParagraph.textContent = "Text changed! Learning JavaScript is fun!";
};

// 2. CHANGE STYLES
// Get the box element
var styleBox = document.getElementById('style-demo');

// When box is clicked, change its style
styleBox.onclick = function() {
  styleBox.style.backgroundColor = "lightblue";
  styleBox.style.color = "darkblue";
  styleBox.style.padding = "20px";
  styleBox.innerHTML = "Look! My styles changed!";
};

// 3. TOGGLE ELEMENT
// Get the button and container elements
var toggleBtn = document.getElementById('toggle-element');
var messageContainer = document.getElementById('special-message-container');

// When button is clicked, add or remove message
toggleBtn.onclick = function() {
  // If container is empty, add message
  if (messageContainer.innerHTML === "") {
    messageContainer.innerHTML = "<p>Hello! I appear and disappear!</p>";
    toggleBtn.textContent = "Remove Message";
  } 
  // If container has message, remove it
  else {
    messageContainer.innerHTML = "";
    toggleBtn.textContent = "Show Message";
  }
};
