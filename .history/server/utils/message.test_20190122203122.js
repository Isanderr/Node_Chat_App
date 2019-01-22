var expect = require('expect');

var {generateMessage} = require('./message');


describe('generateMessage', () =>
{
    it('should generate correct message object', () =>
    {
        var from = 'Henry';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () =>
{
    it('should generate corret location object', () =>
    {

    });
});