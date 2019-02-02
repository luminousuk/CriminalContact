import { Account } from "./account.model";
import Entity from './entity.model';

export class Player extends Entity {
    constructor(
        private _name: string,
        private _account: Account
    ) {
        super();
    }

    get name(): string {
        return this._name;
    }

    get account(): Account {
        return this._account;
    }
}