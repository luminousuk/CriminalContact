import { Account } from "./account.model";

export class Transaction {

    private readonly _timestamp: Date;

    constructor(
        private readonly _account: Account,
        private readonly _amount: number,
        private readonly _description: string
    ) {
        this._timestamp = new Date();
    }

    get account(): Account {
        return this._account;
    }

    get amount(): number {
        return this._amount;
    }

    get description(): string {
        return this._description;
    }

}
