{
    // Reference Type --> Object

    const user: {
        firstName: string;
        middleName: string;
        lastName: string;
        age: number;
        isAdmin: boolean;
    } = {
        firstName: 'Azim',
        middleName: 'uddin',
        lastName: 'Pranto',
        age: 23,
        isAdmin: false,
    }

    const user1: {
        company: 'Programming Hero';  // type --> literal type
        firstName: string;
        middleName?: string;  // optional types
        lastName: string;
        age: number;
        isAdmin: boolean;
    } = {
        company: 'Programming Hero',
        firstName: 'Jhankar',
        lastName: 'Mahbub',
        age: 33,
        isAdmin: true,
    }


}