// Import the necessary modules
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Keep a reference to the window object so it doesn't get garbage collected
let mainWindow;

// Wait until the app is ready to create the window
app.on('ready', function() {
  // Create a new browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // Remove window frame
    webPreferences: {
      nodeIntegration: true // Allow access to Node.js modules from client-side JS
    }
  });

  // Load the start menu HTML file
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'start_menu.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools for debugging
  // mainWindow.webContents.openDevTools();

  // When the window is closed, dereference the object
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

// Define game logic here
function startNewGame() {
  // Code to start a new game
}

function loadGame() {
  // Code to load a saved game
}

function showCredits() {
  // Code to display the credits screen
}

// Set up event listeners for the start menu buttons
document.getElementById('new-game-button').addEventListener('click', startNewGame);
document.getElementById('load-game-button').addEventListener('click', loadGame);
document.getElementById('credits-button').addEventListener('click', showCredits);