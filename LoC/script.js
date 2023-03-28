const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login/index.html');
});

// Create the HTTP server
const server = http.createServer(app);

// Initialize Socket.io with the HTTP server
const io = socketio(server);

// Handle Socket.io connections
io.on('connection', (socket) => {
  console.log('A client has connected');

  // Handle Socket.io events for this client
  socket.on('some_event', (data) => {
    console.log('Received data from client:', data);
    // Handle the data as needed
  });

  // Handle Socket.io disconnections for this client
  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

// Start the server and listen on a port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});