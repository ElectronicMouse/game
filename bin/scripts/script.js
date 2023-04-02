const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", function() {
var myInput = document.getElementById("input");
var naratorOutput = document.getElementById("output");
var characterpicture = document.getElementById("character_picture_img");
myInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const inputValue = myInput.value;
    handleInput(inputValue);
  }
});

function handleInput(input) {

  // do something with the input
  myInput.value = ""
  let num = input.charAt(9) 
  if(input=="yes" /*missing scripts for story and comparisons*/){naratorOutput.innerHTML = "missing scripts for story and comparisons"}
  if(input==String("character"+num) /*missing scripts for story and comparisons*/){characterpicture.src = "character/"+input+"/image/character.png"}
  
ipcRenderer.send("log", "Input received: " + input,"INFO","script.js:22");

  if(input=="clear"){ipcRenderer.send("clearlog");}
     
    }
});