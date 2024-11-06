{
    // OOP -> class

    class User {
        // parameter properties
        constructor(public name: string, public email: string, public age: number, public gender: string) { }

        makeUser() {
            console.log(`This Name: ${this.name} Email: ${this.email} Age: ${this.age} `);
        }
    };

    const person1 = new User(
        'azim',
        'azim@gmail.com',
        23,
        'male'
    );

    const person2 = new User(
        'Anisul',
        'anisul@gmail.com',
        33,
        'male'
    );

    person1.makeUser();


}