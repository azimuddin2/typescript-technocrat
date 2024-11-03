{
    //  Learning Function --> Normal Function - Arrow Function

    function add(num1: number, num2: number) {
        return num1 + num2;
    }

    add(30, 20)

    const addArrow = (num1: number, num2: number) => num1 - num2
    addArrow(30, 20)


    // object --> function --> method
    const user = {
        name: 'Azim Uddin',
        balance: 0,
        addBalance(newBalance: number): string {
            return `My new balance is : ${this.balance + newBalance}`;
        },
    };


    const numberArray: number[] = [101, 102, 103, 104];

    const newArray: number[] = numberArray.map((elem: number): number => elem * elem);

}