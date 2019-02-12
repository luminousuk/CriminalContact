import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { RoleService } from '../../services/role.service';
import IPlayerRole from '../../models/roles/playerrole.i';
import { CreatePlayerComponent } from "../dialogs/create-player/create-player.component";

@Component({
  selector: 'cc-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  private _createPlayerDialogRef: MatDialogRef<CreatePlayerComponent>;

  // @ViewChild("confirmDeleteModal")
  // private _confirmDeleteModal: ElementRef;

  // @ViewChild("addPlayerModal")
  // private _addPlayerModal: ElementRef;

  // @ViewChild("confirmDeadModal")
  // private _confirmDeadModal: ElementRef;

  constructor(
    private readonly _playerService: PlayerService,
    private readonly _roleService: RoleService,
    private readonly _dialogService: MatDialog
  ) { }

  ngOnInit() {
  }

  public get players(): Player[] {
    return this._playerService.players;
  }

  public createPlayer(): void {
    this._createPlayerDialogRef = this._dialogService.open(CreatePlayerComponent);
    this._createPlayerDialogRef
      .afterClosed()
      .subscribe(data => {
        console.log(data);
      });

    // this._modalService.open(this._addPlayerModal).result.then(() => {
    //   const newPlayer = this._playerService.createPlayer(this.createPlayerFirstName, this.createPlayerLastName, this.createPlayerAmount);

    //   if (!!this.createPlayerRole) {
    //     this._roleService.assignRole(this.createPlayerRole.name, newPlayer);
    //   }

    //   this.clearCreatePlayerInputs();
    // }, () => {
    //   this.clearCreatePlayerInputs();
    // }); 
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

  public setPlayerRole(player: Player, role: string) {
    this._roleService.assignRole(role, player);
  }
}
