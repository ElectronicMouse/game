const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", function() {
var myInput = document.getElementById("input");

myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const inputValue = myInput.value;
    handleInput(inputValue);
  }
});

function handleInput(input) {
  // do something with the input
  myInput.value = ""
  ipcRenderer.send("log", "Input received: " + input,"INFO","script.js:14");
}
});