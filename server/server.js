const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);  // gives back web sockets server to emit/listen to events

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Scott',
        text: 'I am here!',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('Create message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});