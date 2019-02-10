import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { RoleService } from '../../services/role.service';
import IPlayerRole from '../../models/roles/playerrole.i';

@Component({
  selector: 'cc-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  @ViewChild("confirmDeleteModal")
  private _confirmDeleteModal: ElementRef;

  @ViewChild("addPlayerModal")
  private _addPlayerModal: ElementRef;

  @ViewChild("confirmDeadModal")
  private _confirmDeadModal: ElementRef;

  public createPlayerFirstName: string = "";
  public createPlayerLastName: string = "";
  public createPlayerAmount: number = 1000;
  public createPlayerRole: IPlayerRole;

  constructor(
    private readonly _playerService: PlayerService,
    private readonly _roleService: RoleService,
    private readonly _modalService: NgbModal
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
    this._modalService.open(this._addPlayerModal).result.then(() => {
      const newPlayer = this._playerService.createPlayer(this.createPlayerFirstName, this.createPlayerLastName, this.createPlayerAmount);

      if (!!this.createPlayerRole) {
        this._roleService.assignRole(this.createPlayerRole.name, newPlayer);
      }

      this.clearCreatePlayerInputs();
    }, () => {
      this.clearCreatePlayerInputs();
    }); 
  }

  private clearCreatePlayerInputs(): void {
    this.createPlayerFirstName = "";
    this.createPlayerLastName = "";
    this.createPlayerRole = null;
  }

  public deletePlayer(player: Player) {
    this._modalService.open(this._confirmDeleteModal).result.then(() => {
      this._playerService.deletePlayer(player);
    }, () => {});
  }

  public setDead(player: Player) {
    this._modalService.open(this._confirmDeadModal).result.then(() => {
      player.setDead();
    }, () => {});
  }

  public getPlayerRole(player: Player): string {
    const role = this._roleService.getRoleForPlayer(player);
    return !!role ? role.name : "";
  }

  public setPlayerRole(player: Player, role: string) {
    this._roleService.assignRole(role, player);
  }
}
