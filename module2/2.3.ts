{
    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [101, 102, 103, 104];
    const rollNumber: GenericArray<number> = [101, 102, 103, 104];

    // const friends: string[] = ['Anisul', 'Ayman', 'Jhankar', 'Azim'];
    const friends: GenericArray<string> = ['Anisul', 'Ayman', 'Jhankar', 'Azim'];

    // const booleanArray: boolean[] = [true, false, true];
    const booleanArray: GenericArray<boolean> = [true, false, true];

    const users: GenericArray<{ name: string, age: number, isAdmin: boolean }> = [
        {
            name: 'Azim Uddin',
            age: 20,
            isAdmin: true,
        },
        {
            name: 'Anisul Islam',
            age: 30,
            isAdmin: false,
        },
    ];


    // learn generic tuple 
    type GenericTuple<X, Y> = [X, Y];

    const man: GenericTuple<string, string> = ['Mr.X', 'Mr.Y'];

    const userWithId: GenericTuple<number, { name: string, email: string }> = [
        101,
        { name: 'Azim', email: 'azim@gamil.com' }
    ]


}