{
    // getter an setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        get balance() {
            return this._balance;
        }

    };

    const ucbBankAccount = new BankAccount(101, 'MD. AZIM UDDIN', 500);

    ucbBankAccount.deposit = 500;

    const myBalance = ucbBankAccount.balance;

    console.log(myBalance);

}