{
    // nullable types | unknown type | never

    // learn nullable types
    const search = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('There is nothing to search');
        }
    }
    search(null);


    // learn unknown type 
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000)
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(result);
        }
        else {
            console.log('wrong input');
        }
    };

    getSpeedInMeterPerSecond(null)


    // learn never type
    function throwError(message: string): never {
        throw new Error(message);
    }
    throwError('Nothing is wrong');


}