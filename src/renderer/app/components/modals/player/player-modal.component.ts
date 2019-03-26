import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";

import IPlayerRole from "../../../models/playerrole.i";
import { RoleService } from "../../../services/role.service";
import { SettingsService } from "../../../services/settings.service";
import { BaseModalComponent } from "../base-modal.component";

export interface PlayerModalResult {
  firstName: string;
  lastName: string;
  startingAmount: number;
  role: IPlayerRole;
}

@Component({
  templateUrl: "./player-modal.component.html",
  styleUrls: ["player-modal.component.scss"]
})
export class PlayerModalComponent extends BaseModalComponent<PlayerModalResult> implements OnInit {

  public showRole = true;
  public showStartingAmount = true;

  public firstName: string;
  public lastName: string;
  public startingAmount: number;
  public role: IPlayerRole;
  public availableRoles: IPlayerRole[];

  constructor(
    protected readonly _bsModalRef: BsModalRef,
    private readonly _settingsService: SettingsService,
    private readonly _roleService: RoleService
  ) {
    super(_bsModalRef);
  }

  ngOnInit() {
    if (this.showRole) {
      this.availableRoles = this._roleService.availableRoles;
    }

    if (this.showStartingAmount) {
      this._settingsService.playerStartingAmount$.subscribe(amount => {
        this.startingAmount = amount;
      });
    }
  }

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
