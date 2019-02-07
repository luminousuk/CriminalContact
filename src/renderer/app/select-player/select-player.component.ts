import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../shared/models/player.model';

@Component({
  selector: 'cc-select-player',
  templateUrl: './select-player.component.html',
  styleUrls: ['./select-player.component.scss']
})
export class SelectPlayerComponent implements OnInit {

  @Input() placeholder: string = "Select player...";
  @Output() playerSelected = new EventEmitter<Player>();

  constructor(
    private _playerService: PlayerService
  ) { }

  ngOnInit() {
  }

  public get players(): Player[] {
    return this._playerService.players.sort((a, b) => a.name.localeCompare(b.name));
  }

  public setPlayer(player: Player) {
    this.playerSelected.emit(player);
  }
}
