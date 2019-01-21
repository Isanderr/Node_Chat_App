var socket = io();


socket.on('connect', function ()
{
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Isander',
        text: 'yes, that works.'
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