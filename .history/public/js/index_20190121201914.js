var socket = io();


socket.on('connect', function ()
{
    console.log('Connected to server');

});
socket.on('disconnect', function ()
{
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message)
{
    console.log('newMessage', message);
});


socket.emit('createMessage', {
    from: 'Alex',
    text: 'Hi'
}, function (data)
    {
        console.log('Got it', data);
    });


jQuery('#message-form').on('submit', function (e)
{
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function)() {

    };
});
