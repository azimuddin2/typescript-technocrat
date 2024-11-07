{
    // type guards

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    };

    const result = add(20, 30);


    // in guards
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    };

    const normalUser: NormalUser = {
        name: 'Mr. Normal User'
    };

    const adminUser: AdminUser = {
        name: 'Mr. Admin User',
        role: 'admin',
    };

    getUser(adminUser);

}