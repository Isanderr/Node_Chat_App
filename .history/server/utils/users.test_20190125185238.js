const expect = require('expect');

const {Users} = require('./users');

describe('Users', () =>
{
    var users;

    beforeEach(() =>
    {
        users = new Users();
        users.users = [ {
            id: '1',
            name: 'John',
            room: 'Node Chat'
        }, {
            id: '2',
            name: 'Johnie',
            room: 'Node Chat2'
        }, {
            id: '3',
            name: 'Johnnie',
            room: 'Node Chat'
        } ];
    });

    it('should add new user', () =>
    {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Luke',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([ user ]);
    });

    it('should return names for Node Chat', () =>
    {
        var userList = users.getUserList('Node Chat');
    });
});