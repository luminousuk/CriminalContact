import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { RoleService } from '../../services/role.service';
import IPlayerRole from '../../models/roles/playerrole.i';
import { PlayerModalComponent, PlayerModalResult } from '../modals/player/player-modal.component';

@Component({
  selector: 'cc-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(
    private readonly _playerService: PlayerService,
    private readonly _roleService: RoleService,
    private readonly _modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  public get players(): Player[] {
    return this._playerService.players;
  }

  public get roles(): IPlayerRole[] {
    return this._roleService.availableRoles;
  }

  public createPlayer(): void {
    this._modalService.show(PlayerModalComponent).content.result.subscribe(
      (player: PlayerModalResult) => {
        const newPlayer = this._playerService.createPlayer(player.firstName, player.lastName, player.startingAmount);

        if (!!player.role) {
          this._roleService.assignRole(player.role.name, newPlayer);
        }
      });
  }

  public deletePlayer(player: Player) {
    // this._modalService.open(this._confirmDeleteModal).result.then(() => {
    //   this._playerService.deletePlayer(player);
    // }, () => {});
  }

  public setDead(player: Player) {
    // this._modalService.open(this._confirmDeadModal).result.then(() => {
    //   player.setDead();
    // }, () => {});
  }

  public getPlayerRole(player: Player): string {
    const role = this._roleService.getRoleForPlayer(player);
    return !!role ? role.name : "";
  }
}
