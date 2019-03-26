import { Guid } from "guid-typescript";

export default abstract class Entity {
    private _id: Guid;

    constructor() {
        this._id = Guid.create();
    }

    public get id(): Guid {
        return this._id;
    }
}
