import Entity from './entity.model';
import IPlayerRole from './playerrole.i';

export class Player extends Entity {

    private _isDead: boolean;
    private _role?: IPlayerRole;
    private _accountNumber: number;

    constructor(
        public firstName: string,
        public lastName: string
    ) {
        super();
    }

    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public get accountNumber(): number {
        return this._accountNumber;
    }

    public set accountNumber(value: number) {
        this._accountNumber = value;
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