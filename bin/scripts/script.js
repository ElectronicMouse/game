const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", function () {
  var myInput = document.getElementById("input");
  var narratorGreeting = document.getElementById("narrator");
  var characterPicture = document.getElementById("character_img");
  myInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const inputValue = myInput.value;
      handleInput(inputValue);
    }
  });

  function handleInput(input) {
    // do something with the input
    myInput.value = "";
    let num = input.charAt(9);
    if (input == "yes" /*missing scripts for story and comparisons*/) {
      narratorGreeting.innerHTML = "missing scripts for story and comparisons";
    }
    if (
      input ==
      String("character" + num) /*missing scripts for story and comparisons*/
    ) {
      characterPicture.src = "character/" + input + "/image/character.png";
    }

    ipcRenderer.send("log", "Input received: " + input, "INFO", "script.js:28");

    if (input == "clear") {
      ipcRenderer.send("clearlog");
    }
  }
});
