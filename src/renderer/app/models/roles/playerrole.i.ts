import { Player } from "../player.model";

export default interface IPlayerRole {
    name: string;
    description: string;
    player: Player;
}
