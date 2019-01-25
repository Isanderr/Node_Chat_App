const expect = require('expect');

const {Users} require('./users');

describe('Users', () =>
{
    it('should add new user', () =>
    {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Luke',
            room: 'The Office Fans'
        };
    });
});