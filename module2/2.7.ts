{
    // generic constraint with keyof operator

    function getPropertyValue<X, Y extends keyof X>(user: X, key: Y) {
        return user[key];
    };

    const user = {
        name: 'Azim Uddin',
        age: 20,
        address: 'dhaka'
    };

    const result = getPropertyValue(user, 'name');


}