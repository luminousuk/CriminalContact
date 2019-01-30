import { Transaction } from "./transaction.model";

export class Account {        
    private readonly _transactions: Transaction[];
    private _balance: number;

    constructor(
        private readonly _accountNumber: number,
        openingBalance: number
    ) {
        this._transactions = [];
        this._balance = 0;
        this.CreateTransaction(openingBalance, "Opening balance");
    }

    get accountNumber(): number {
        return this._accountNumber;
    }

    get balance(): number {
        return this._balance;
    }

    public Deposit(amount: number, description: string): void {

        if (amount <= 0) {
            throw new Error("Cannot deposit a negative amount");
        }
        this.CreateTransaction(amount, description);
    }

    public Withdraw(amount: number, description: string): void {

        if (amount <= 0) {
            throw new Error("Cannot withdraw a negative amount");
        }

        if (amount > this._balance) {
            throw new Error("Insufficient balance");
        }

        this.CreateTransaction(amount * -1, description);
    }

    private CreateTransaction(amount: number, description: string)
    {
        const transaction = new Transaction(this, amount, description);
        this._transactions.push(transaction);
        this._balance += amount;
        console.log(`Account #${this._accountNumber} new balance £${this._balance}`);
    }
}
