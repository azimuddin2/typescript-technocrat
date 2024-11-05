{
    // conditional type

    type a = number;
    type b = string;

    type x = a extends null ? true : false;

    type y = a extends null ? true : b extends undefined ? undefined : any;

    type User = {
        name: string;
        email: string;
        age: number;
        isAdmin: boolean;
    }

    type CheckValue<T> = T extends keyof User ? true : false;

    type HasIsAdmin = CheckValue<'isAdmin'>

}