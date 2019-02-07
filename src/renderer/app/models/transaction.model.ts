import { Account } from "./account.model";

export class Transaction {

    private readonly _timestamp: Date;
    private readonly __cumulativeBalance: number;

    constructor(
        private readonly _account: Account,
        private readonly _amount: number,
        private readonly _description: string
    ) {
        this._timestamp = new Date();
        this.__cumulativeBalance = _account.balance;
    }

    get account(): Account {
        return this._account;
    }

    get timestamp(): Date {
        return this._timestamp;
    }

    get amount(): number {
        return this._amount;
    }

    get description(): string {
        return this._description;
    }

    get cumulativeBalance(): number {
        return this.__cumulativeBalance;
    }
}
