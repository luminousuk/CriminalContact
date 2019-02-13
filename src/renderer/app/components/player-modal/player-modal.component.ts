import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import IPlayerRole from '../../models/roles/playerrole.i';
import { RoleService } from '../../services/role.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'cc-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.scss']
})
export class PlayerModalComponent implements OnInit {

  constructor(
    private readonly _settingsService: SettingsService,
    private readonly _roleService: RoleService,
    private readonly _bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.startingAmount = this._settingsService.playerStartingAmount;
    this.availableRoles = this._roleService.availableRoles;
  }

  @Output()
  public playerResult: EventEmitter<{firstName: string, lastName: string, startingAmount: number, role: IPlayerRole}> = new EventEmitter();

  public firstName: string;
  public lastName: string;
  public startingAmount: number;
  public role: IPlayerRole;
  public availableRoles: IPlayerRole[];

  public Ok(): void {
    this.Close();
    this.playerResult.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      startingAmount: this.startingAmount,
      role: this.role
    });
  }

  public Close(): void {
    this._bsModalRef.hide();
  }

}
