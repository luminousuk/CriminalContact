import { Transaction } from "./transaction.model";
import { CcError } from "../core/cc-error";
import { Player } from "./player.model";

export class Account {
    private readonly _transactions: Transaction[];
    private _balance: number;

    constructor(
        private readonly _player: Player,
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

    get transactions(): Transaction[] {
        return this._transactions;
    }

    public Deposit(amount: number, description: string): void {

        if (amount <= 0) {
            throw new CcError("Cannot deposit a negative amount", "Account");
        }
        this.CreateTransaction(amount, description);
    }

    public Withdraw(amount: number, description: string): void {

        if (amount <= 0) {
            throw new CcError("Cannot withdraw a negative amount", "Account");
        }

        if (amount > this._balance) {
            throw new CcError(`Insufficient balance for account #${this._accountNumber}`, "Account");
        }

        this.CreateTransaction(amount * -1, description);
    }

    private CreateTransaction(amount: number, description: string) {
        this._balance += amount;
        const transaction = new Transaction(this, amount, description);
        this._transactions.push(transaction);
        // console.log(`Account #${this._accountNumber} new balance £${this._balance}`);
    }
}
