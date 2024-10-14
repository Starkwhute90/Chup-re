// Get references to the lid and message elements
const lid = document.querySelector('.lid');
const message = document.querySelector('.message');

// Add a click event listener to the lid
lid.addEventListener('click', () => {
  // Move the lid upwards to "open" the box
  lid.style.top = '-100px';

  // Show the message after a delay
  setTimeout(() => {
    message.style.opacity = '1';
    message.style.bottom = '50px';
  }, 1000); // Adjust delay for when you want the message to appear
});￼Enter
