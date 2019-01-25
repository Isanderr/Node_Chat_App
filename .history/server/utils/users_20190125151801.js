[ {
    id: '/#fssdfsfsdf',
    name: 'Luke',
    room: "The Office Fans"
} ]

//addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)


class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    getUserDescription ()
    {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

var me = new Person('Luke', 30);

