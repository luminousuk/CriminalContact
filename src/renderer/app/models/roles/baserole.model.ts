import { Player } from '../player.model';
import IPlayerRole from './playerrole.i';

export default abstract class BaseRole implements IPlayerRole {
    constructor(
        protected readonly _name: string,
        protected readonly _description: string,
        private _player: Player
    ) {
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get player(): Player {
        return this._player;
    }
}
