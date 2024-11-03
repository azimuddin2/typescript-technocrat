{
    //  Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        email: string;
        address: string;
    };

    const student1: Student = {
        name: 'Azim',
        age: 23,
        gender: 'Male',
        contactNo: '01883061967',
        email: 'mohammadazimuddin274@gmail.com',
        address: 'Dhaka',
    };

    const student2: Student = {
        name: 'Ayman',
        age: 23,
        gender: 'Male',
        email: 'mohammadazimuddin274@gmail.com',
        address: 'Dhaka',
    };


    type UserName = string
    type UserAge = number
    type IsAdmin = boolean

    const userName: UserName = 'Azim Uddin';
    const userAge: UserAge = 23;
    const isAdmin: IsAdmin = true;


    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;

}