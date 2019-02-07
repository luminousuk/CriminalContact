import { Account } from "./account.model";
import Entity from './entity.model';
import IPlayerRole from './roles/playerrole.i';

export class Player extends Entity {

    private _isDead: boolean;
    private _role?: IPlayerRole;

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

    public set role(role: IPlayerRole) {
        this._role = role;
    }
}