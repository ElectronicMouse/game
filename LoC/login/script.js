const exitButton = document.getElementById('exit-button');

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
    }
  }
}
exitButton.addEventListener('click', function(event) {
  confirmExit() 
});

function confirmExit() {
  var result = confirm("Are you sure you want to exit the game?");
  if (result) {
    window.close();
  }
}



toggleFullScreen();