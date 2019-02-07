import BaseRole from './baserole.model';
import { Player } from "../player.model";

export default class Mayor extends BaseRole {
    constructor(player: Player) {
        super("Mayor", "Mayor", player);
    }
}
