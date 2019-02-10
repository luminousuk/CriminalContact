import { Injectable } from '@angular/core';
import IPlayerRole from '../models/roles/playerrole.i';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private readonly _roles: IPlayerRole[] = [
    {
      name: "Mayor",
      description: "The Mayor of New Warleans",
      config: {
        interestPct: 0.2,
        finalDeduction: 1000
      }
    },
    {
      name: "Police Chief",
      description: "The principle law enforcer, this high ranking officer is supplied with an hourly salary with which to hire and arm their police force.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Police",
      description: "Sometimes hired by the Police chief on the day, these officers are often the first to be equipped with firearms!",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Doctor",
      description: "A player blessed with the power to cure the ‘wounded’, and charge for it!",
      config: {
        finalDeduction: 1000,
        deathInheritancePct: 0.25
      }
    },
    {
      name: "Undertaker",
      description: "While business is often slow to start with, this character is always the busiest at the end of the day.",
      config: {
        finalDeduction: 1000,
        deathInheritancePct: 0.25
      }
    },
    {
      name: "Store Keeper",
      description: "With the ability to buy and sell any item, they are the person to visit if you want to order a rare item, or sell something quick.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Goldsmith",
      description: "Just as you’d expect, if it sparkles they will buy, make or sell it.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Reporter",
      description: "Always looking for a good story, sometimes willing to buy one.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Arms Dealer",
      description: "Always popular, they are responsible for the profitable distribution of firearms, for defence of course!?",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Chemist",
      description: "A manufacturing character, often found buying ingredients for their wide range of ‘products’.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Distiller",
      description: "Brewing the finest alcohol in the land can be a demanding but profitable job.",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Farmer",
      description: "A fundamental production character, without their reasonably priced merchandise every other production chain would grind to a halt!",
      config: {
        finalDeduction: 1000
      }
    },
    {
      name: "Miner",
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
    const role = this._roles.find(role => role.name == roleName);

    if (!role) {
      throw new Error("Role does not exist.");
    }

    return role;
  }

  public assignRole(roleName: string, player: Player): void {
    const role = this.getRole(roleName);

    if (this._roleAssignments.has(role)) {
      throw new Error(`${roleName} role already assigned.`);
    }

    this._roleAssignments.set(role, player);
    this._playerAssignments.set(player, role);
    player.role = role;
    this.setAvailableRoles();
  }

  public unassignRole(roleName: string): void {
    const role = this.getRole(roleName);

    if (!this._roleAssignments.has(role)) {
      throw new Error(`${roleName} role not assigned.`);
    }

    const player = this._roleAssignments.get(role);

    this._roleAssignments.delete(role);
    this._playerAssignments.delete(player);
    player.role = null;
    this.setAvailableRoles();
  }

  public getPlayerForRole(roleName: string): Player {
    const role = this.getRole(roleName);

    return this._roleAssignments.get(role);
  }

  public getRoleForPlayer(player: Player): IPlayerRole {
    return this._playerAssignments.get(player);
  }

  private setAvailableRoles(): void {
    this.availableRoles = this._roles.filter(r => !this._roleAssignments.has(r));
  }
}
