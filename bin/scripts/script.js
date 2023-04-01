const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", function() {
var myInput = document.getElementById("input");
var naratorOutput = document.getElementById("output");

myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const inputValue = myInput.value;
    handleInput(inputValue);
  }
});

function handleInput(input) {

  // do something with the input
  myInput.value = ""
  
  if(input=="yes" /*missing scripts for story and comparisons*/){naratorOutput.innerHTML = "missing scripts for story and comparisons"}
  
  ipcRenderer.send("log", "Input received: " + input,"INFO","script.js:21");

  if(input=="clear"){ipcRenderer.send("clearlog");}
     
    }
});