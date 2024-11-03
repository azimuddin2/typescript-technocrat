{
    // object destructuring
    const user = {
        id: 101,
        name: {
            firstName: 'Azim',
            middleName: 'Uddin',
            lastName: 'Pranto'
        },
        contactNumber: '01883061967',
        address: 'Dhaka'
    };

    const {
        id,
        name: { firstName, middleName, lastName },
        contactNumber,
        address
    } = user;


    // array destructuring
    const myFriends = ['Jhankar', 'Anisul', 'Ayman', 'Mezba', 'Azim'];
    const [, , bestFriend, ...rest] = myFriends;


}