[ {
    id: '/#fssdfsfsdf',
    name: 'Luke',
    room: "The Office Fans"
} ]

//addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users
{
    constructor()
    {
        this.users = [];
    }
    addUser (id, name, room)
    {
        var user = {id, name, room};
        this.users.push(user);
    }
}

// class Person
// {
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription ()
//     {
//         return `${ this.name } is ${ this.age } year(s) old.`;
//     }
// }

// var me = new Person('Luke', 30);
// var description = me.getUserDescription();
// console.log(description);

