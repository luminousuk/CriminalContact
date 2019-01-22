import { Account } from "./account";

export class Player {
    //private readonly _account: Account;

    constructor(
        private _name: string,
        private _account: Account
    ) {        
    }

    get name(): string {
        return this._name;
    }

    get account(): Account {
        return this._account;
    }
}