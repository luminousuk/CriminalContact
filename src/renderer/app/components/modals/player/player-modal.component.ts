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
  templateUrl: "./player-modal.component.html",
  styleUrls: ["player-modal.component.scss"]
})
export class PlayerModalComponent extends BaseModalComponent<PlayerModalResult> implements OnInit {

  constructor(
    protected readonly _bsModalRef: BsModalRef,
    private readonly _settingsService: SettingsService,
    private readonly _roleService: RoleService    
  ) {
    super(_bsModalRef);

    this._settingsService.playerStartingAmount$.subscribe(amount => {
      this.startingAmount = amount;
      console.debug(`PlayerModalComponent.startingAmount = ${amount}`);
    })
  }

  ngOnInit() {
    // TODO: change role service to update available roles using observable
    this.availableRoles = this._roleService.availableRoles;
  }

  public edit: boolean = false;
  public firstName: string;
  public lastName: string;
  public startingAmount: number;
  public role: IPlayerRole;
  public availableRoles: IPlayerRole[];

  public Save(): void {
    this.Close();
    this.result.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      startingAmount: this.startingAmount,
      role: this.role
    });
  }
}
