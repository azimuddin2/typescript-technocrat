{
    // ternary operator | optional chaining | nullish coalescing

    const age: number = 15;

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('Not adult');
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log({ isAdult });

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';

    console.log({ result1 }, { result2 });


    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        };
        contactNo: string;
    };

    const user: User = {
        name: 'Azim',
        address: {
            city: 'Feni',
            road: 'Awesome Road 202',
            presentAddress: 'Dhaka town'
        },
        contactNo: '01883061967'
    };

    const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
    console.log({permanentAddress});


}