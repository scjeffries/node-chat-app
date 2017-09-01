const socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Kim',
        text: 'Hey. This is from me.'
    });
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});