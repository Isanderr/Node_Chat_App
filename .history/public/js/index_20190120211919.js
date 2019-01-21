var socket = io();
socket.on('connect', function ()
{
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'lcendrowskii@wp.pl',
        text: 'Hey. This is Isander.'
    });
});
socket.on('disconnect', function ()
{
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email)
{
    console.log('New email', email)
});