import { Account } from "./account.model";
import Entity from './entity.model';

export class Player extends Entity {
    constructor(
        private _firstName: string,
        private _lastName: string,
        private _account: Account
    ) {
        super();
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get name(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    get account(): Account {
        return this._account;
    }
}