{
    // mapped type

    const arrOfNumbers: number[] = [1, 4, 6, 9];

    const arrOfStrings: string[] = arrOfNumbers.map(number => number.toString())
    console.log(arrOfStrings);

    type AreaNumber = {
        width: number;
        height: number;
    }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

}