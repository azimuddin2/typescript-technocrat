{
    // OOP -> Encapsulation

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public getBalance() {
            return this._balance;
        }

    };

    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    };

    const ucbBankAccount = new BankAccount(101, 'MD. AZIM UDDIN', 500);

    ucbBankAccount.addDeposit(500);

    const myBalance = ucbBankAccount.getBalance();
    console.log(myBalance);

}