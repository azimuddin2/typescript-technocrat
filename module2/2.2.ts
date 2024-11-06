{
    // Interface

    // learn type alias
    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string };

    const user1: UserWithRole1 = {
        name: 'Azim uddin',
        age: 18,
        role: 'Developer',
    };

    type Roll1 = number[];
    const rollNumber1: Roll1 = [101, 102, 103];

    type Add1 = (num1: number, num2: number) => number;
    const add1: Add1 = (num1, num2) => num1 + num2;



    // learn interface
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 { role: string };

    const user2: UserWithRole2 = {
        name: 'AZIM',
        age: 20,
        role: 'Developer'
    }

    interface Roll2 {
        [index: number]: number
    }
    const rollNumber2: Roll2 = [101, 102, 103];


    interface Add2 {
        (num1: number, num2: number): number
    }
    const add2: Add2 = (num1, num2) => num1 + num2;


}