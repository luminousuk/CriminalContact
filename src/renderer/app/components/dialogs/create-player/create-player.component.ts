import { Component, OnInit } from '@angular/core';
import IPlayerRole from 'src/renderer/app/models/roles/playerrole.i';
import { RoleService } from 'src/renderer/app/services/role.service';

@Component({
  templateUrl: './create-player.component.html'
})
export class CreatePlayerComponent {

  constructor(
    private readonly _roleService: RoleService
  ) { }

  public firstName: string;
  public lastName: string;
  public startingAmount: number;
  public role: IPlayerRole;

  public get roles(): IPlayerRole[] {
    return this._roleService.availableRoles;
  }
}
