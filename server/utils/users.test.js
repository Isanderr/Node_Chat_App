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

    it('should remove a user', () =>
    {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () =>
    {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () =>
    {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () =>
    {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for Node Chat', () =>
    {
        var userList = users.getUserList('Node Chat');
        expect(userList).toEqual([ 'John', 'Johnnie' ]);
    });
    it('should return names for Node Chat2', () =>
    {
        var userList = users.getUserList('Node Chat2');
        expect(userList).toEqual([ 'Johnie' ]);
    });

    it('should display all the rooms', () =>
    {
        expect(users.getRooms()).toEqual([ 'Node Chat', 'Node Chat2' ]);
    });
});