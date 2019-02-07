import { Account } from "./account.model";
import Entity from './entity.model';

export class Player extends Entity {

    private _isDead: boolean;

    constructor(
        private _firstName: string,
        private _lastName: string,
        private _account: Account
    ) {
        super();
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get name(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public get account(): Account {
        return this._account;
    }

    public get isDead(): boolean {
        return this._isDead;
    }

    public setDead(): void {
        this._isDead = true;
    }
}