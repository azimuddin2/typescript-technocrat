{
    // utility types - pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    };

    type NameAge = Pick<Person, "name" | "age">

    // omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Azim Uddin",
        age: 23,
        contactNo: '01883061967'
    };


}