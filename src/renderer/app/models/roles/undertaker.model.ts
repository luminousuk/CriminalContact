import BaseRole from './baserole.model';
import { Player } from "../player.model";

export default class Undertaker extends BaseRole {
    constructor(player: Player) {
        super("Undertaker", "Undertaker", player);
    }
}
