// Import required modules
const { app, BrowserWindow, screen, ipcMain, ipcRenderer } = require('electron');
const path = require('path');
const Logger = require('./logs/logger.js');
const logger = new Logger()

// Create a new browser window
let mainWindow;

function createWindow() {
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;
  mainWindow = new BrowserWindow({
    width: dimensions.width,
    height: dimensions.height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.setFullScreen(true);
  // Load your HTML file
  mainWindow.loadFile('index.html');



  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // When the window is closed, set the reference to null
  mainWindow.on('closed', function () {
    mainWindow = null;
  });


    // Listen for the 'log' event from the renderer process
    ipcMain.on('log', (event, message, logLevel, logLine) => {
        logger.log(message, logLevel, logLine);
      });
    
}

// When the app is ready, create the window
app.on('ready', createWindow);

// Quit the app when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// On macOS, it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

