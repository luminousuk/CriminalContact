import { Account } from "./account.model";
import Entity from './entity.model';
import IPlayerRole from './roles/playerrole.i';

export class Player extends Entity {

    private _isDead: boolean;
    private _role?: IPlayerRole;

    constructor(
        public firstName: string,
        public lastName: string,
        private _account: Account
    ) {
        super();
    }

    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
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

    public get role(): IPlayerRole {
        return this._role;
    }

    public set role(role: IPlayerRole) {
        this._role = role;
    }
}