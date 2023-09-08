const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Store connected users
const users = {};

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Handle incoming socket connections
io.on('connection', (socket) => {
  console.log('A user connected.');

  // Handle user joining a chat room
  socket.on('join', (username) => {
    // Store the username and socket ID
    users[socket.id] = username;

    // Broadcast a user joined message to all connected sockets
    socket.broadcast.emit('user joined', username);
  });

  // Handle incoming messages
  socket.on('chat message', (message) => {
    // Broadcast the message to all connected sockets
    io.emit('chat message', { username: users[socket.id], message });
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    console.log(`User disconnected: ${username}`);

    // Broadcast a user left message to all connected sockets
    socket.broadcast.emit('user left', username);
  });
});

// Start the server
const port = 3000;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/assignment7.html');
});

