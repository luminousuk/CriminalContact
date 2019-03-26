import Entity from "./entity.model";
import IPlayerRole from "./playerrole.i";

export class Player extends Entity {

    private _isEliminated: boolean;
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

    public get isEliminated(): boolean {
        return this._isEliminated;
    }

    public setEliminated(): void {
        this._isEliminated = true;
    }

    public get role(): IPlayerRole {
        return this._role;
    }

    public set role(role: IPlayerRole) {
        this._role = role;
    }
}
