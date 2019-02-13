import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";

import IPlayerRole from "../../../models/roles/playerrole.i";
import { RoleService } from "../../../services/role.service";
import { SettingsService } from "../../../services/settings.service";
import { BaseModalComponent } from '../base-modal.component';

export interface PlayerModalResult {
  firstName: string;
  lastName: string;
  startingAmount: number;
  role: IPlayerRole
}

@Component({
  templateUrl: "./player-modal.component.html"
})
export class PlayerModalComponent extends BaseModalComponent<PlayerModalResult> implements OnInit {

  constructor(
    protected readonly _bsModalRef: BsModalRef,
    private readonly _settingsService: SettingsService,
    private readonly _roleService: RoleService    
  ) {
    super(_bsModalRef);
  }

  ngOnInit() {
    this.startingAmount = this._settingsService.playerStartingAmount;
    this.availableRoles = this._roleService.availableRoles;
  }

  public firstName: string;
  public lastName: string;
  public startingAmount: number;
  public role: IPlayerRole;
  public availableRoles: IPlayerRole[];

  public Ok(): void {
    this.Close();
    this.result.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      startingAmount: this.startingAmount,
      role: this.role
    });
  }
}
