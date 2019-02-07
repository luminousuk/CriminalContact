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
      name: "Undertaker",
      description: "The Undertaker",
      config: {
        finalDeduction: 1000,
        deathInheritancePct: 0.25
      }
    }
  ];

  private readonly _roleAssignments: Map<IPlayerRole, Player> = new Map<IPlayerRole, Player>();
  private readonly _playerAssignments: Map<Player, IPlayerRole> = new Map<Player, IPlayerRole>();

  constructor() { }

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
  }

  public unassignRole(roleName: string): void {
    const role = this.getRole(roleName);

    if (!this._roleAssignments.has(role)) {
      throw new Error(`${roleName} role not assigned.`);
    }

    const player = this._roleAssignments.get(role);

    this._roleAssignments.delete(role);
    this._playerAssignments.delete(player);
  }

  public getPlayerForRole(roleName: string): Player {
    const role = this.getRole(roleName);

    return this._roleAssignments.get(role);
  }

  public getRoleForPlayer(player: Player): IPlayerRole {
    return this._playerAssignments.get(player);
  }
}
