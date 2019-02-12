import { Component, OnInit } from '@angular/core';
import IPlayerRole from 'src/renderer/app/models/roles/playerrole.i';
import { RoleService } from 'src/renderer/app/services/role.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './create-player.component.html'
})
export class CreatePlayerComponent implements OnInit {

  constructor(
    private readonly _roleService: RoleService,
    private readonly _dialogRef: MatDialogRef<CreatePlayerComponent>
  ) { }

  ngOnInit() {
  }

  public firstName: string;
  public lastName: string;
  public startingAmount: number;
  public role: IPlayerRole;

  public get roles(): IPlayerRole[] {
    return this._roleService.availableRoles;
  }

  public save(form): void {
    
  }
}
