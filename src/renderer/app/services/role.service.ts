import { Injectable } from "@angular/core";
import IPlayerRole from "../models/playerrole.i";
import { Player } from "../models/player.model";
import { CcError } from "../core/cc-error";

export class RoleNames {
  public static Mayor = "Mayor";
  public static PoliceChief = "Police Chief";
  public static Police = "Police";
  public static Doctor = "Doctor";
  public static Undertaker = "Undertaker";
  public static StoreKeeper = "Store Keeper";
  public static Goldsmith = "Goldsmith";
  public static Reporter = "Reporter";
  public static ArmsDealer = "Arms Dealer";
  public static Chemist = "Chemist";
  public static Distiller = "Distiller";
  public static Farmer = "Farmer";
  public static Miner = "Miner";
}

@Injectable({
  providedIn: "root"
})
export class RoleService {

  // TODO: Move to json file / settings
  private readonly _roles: IPlayerRole[] = [
    {
      name: RoleNames.Mayor,
      description: "The Mayor of New Warleans",
      config: {
        interestPct: 0.2,
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.PoliceChief,
      description: "The principle law enforcer, this high ranking officer is supplied with an hourly salary with which to hire and arm their police force.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Police,
      description: "Sometimes hired by the Police chief on the day, these officers are often the first to be equipped with firearms!",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Doctor,
      description: "A player blessed with the power to cure the ‘wounded’, and charge for it!",
      config: {
        finalDeduction: 1000,
        deathInheritancePct: 0.25
      }
    },
    {
      name: RoleNames.Undertaker,
      description: "While business is often slow to start with, this character is always the busiest at the end of the day.",
      config: {
        finalDeduction: 1000,
        deathInheritancePct: 0.25
      }
    },
    {
      name: RoleNames.StoreKeeper,
      description: "With the ability to buy and sell any item, they are the person to visit if you want to order a rare item, or sell something quick.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Goldsmith,
      description: "Just as you’d expect, if it sparkles they will buy, make or sell it.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Reporter,
      description: "Always looking for a good story, sometimes willing to buy one.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.ArmsDealer,
      description: "Always popular, they are responsible for the profitable distribution of firearms, for defence of course!?",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Chemist,
      description: "A manufacturing character, often found buying ingredients for their wide range of ‘products’.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Distiller,
      description: "Brewing the finest alcohol in the land can be a demanding but profitable job.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Farmer,
      description: "A fundamental production character, without their reasonably priced merchandise every other production chain would grind to a halt!",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: RoleNames.Miner,
      description: "Selling such precious minerals, playing as this character is a blast!",
      config: {
        finalDeduction: 1000
      }
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  private readonly _roleAssignments: Map<IPlayerRole, Player> = new Map<IPlayerRole, Player>();
  private readonly _playerAssignments: Map<Player, IPlayerRole> = new Map<Player, IPlayerRole>();

  constructor() {
    this.setAvailableRoles();
  }

  public availableRoles: IPlayerRole[];

  public get roles(): IPlayerRole[] {
    return this._roles;
  }

  public getRole(roleName: string): IPlayerRole {
    const role = this._roles.find(r => r.name === roleName);

    if (!role) {
      throw new CcError("Role does not exist.");
    }

    return role;
  }

  public assignRole(roleName: string, player: Player): void {
    const role = this.getRole(roleName);

    if (this._roleAssignments.has(role)) {
      throw new CcError(`${roleName} role already assigned.`);
    }

    if (this._playerAssignments.has(player)) {
      this.unassignPlayer(player);
    }

    this._roleAssignments.set(role, player);
    this._playerAssignments.set(player, role);
    player.role = role;
    this.setAvailableRoles();
  }

  public unassignRole(roleName: string): void {
    const role = this.getRole(roleName);

    if (!this._roleAssignments.has(role)) {
      return;
    }

    const player = this._roleAssignments.get(role);
    this.removeRole(player, role);
  }

  public unassignPlayer(player: Player): void {
    if (!this._playerAssignments.has(player)) {
      return;
    }

    const role = this._playerAssignments.get(player);
    this.removeRole(player, role);
  }

  public getPlayerForRole(roleName: string): Player {
    const role = this.getRole(roleName);

    return this._roleAssignments.get(role);
  }

  public getRoleForPlayer(player: Player): IPlayerRole {
    return this._playerAssignments.get(player);
  }

  public transferRole(fromPlayer: Player, toPlayer: Player): void {
    const role = this.getRoleForPlayer(fromPlayer);

    if (!role) {
      throw new CcError("Source player does not have a role", "Cannot transfer role");
    }

    if (!!this.getRoleForPlayer(toPlayer)) {
      throw new CcError("Target player already has a role", "Cannot transfer role");
    }

    this.unassignPlayer(fromPlayer);
    this.assignRole(role.name, toPlayer);
  }

  private setAvailableRoles(): void {
    this.availableRoles = this._roles.filter(r => !this._roleAssignments.has(r));
  }

  private removeRole(player: Player, role: IPlayerRole): void {
    this._playerAssignments.delete(player);
    this._roleAssignments.delete(role);
    player.role = null;
    this.setAvailableRoles();
  }
}
