import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PlayerService } from '../services/player.service';
import { Player } from '../shared/models/player.model';

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

  public createPlayerFirstName: string = "";
  public createPlayerLastName: string = "";
  public createPlayerAmount: number = 1000;

  constructor(
    private _playerService: PlayerService,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  public get players(): Player[] {
    return this._playerService.players;
  }

  public createPlayer(): void {
    this._modalService.open(this._addPlayerModal).result.then(() => {
      this._playerService.createPlayer(this.createPlayerFirstName, this.createPlayerLastName, this.createPlayerAmount);
      this.clearCreatePlayerInputs();
    }, () => {
      this.clearCreatePlayerInputs();
    }); 
  }

  private clearCreatePlayerInputs(): void {
    this.createPlayerFirstName = "";
    this.createPlayerLastName = "";
  }

  public deletePlayer(player: Player) {
    this._modalService.open(this._confirmDeleteModal).result.then(() => {
      this._playerService.deletePlayer(player);
    }, () => {});
  }
}
