import IRoleConfiguration from "./roleconfiguration.i";
import { Player } from "./player.model";

export default interface IPlayerRole {
    name: string;
    description: string;
    config?: IRoleConfiguration;
    player?: Player;
}
