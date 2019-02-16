import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Player } from '../models/player.model';
import { BankService } from './bank.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _players: Player[] = [];

  constructor(
    private readonly _bankService: BankService,
    private readonly _toastrService: ToastrService
    ) { }

  public get players(): Player[] {
    return this._players;
  }

  public createPlayer(firstName: string, lastName: string, startingBalance: number): Player {
    const account = this._bankService.OpenAccount(startingBalance);
    const player = new Player(firstName, lastName, account);
    this._players.push(player);
    this._players.sort((a, b) => a.name.localeCompare(b.name));

    this._toastrService.success(
      `${player.name} has been created`,
      "Player created");

    return player;
  }

  public deletePlayer(player:Player): void {
    this._players = this._players.filter(p => p !== player);

    this._toastrService.error(
      `${player.name} has been deleted`,
      "Player deleted");
  }
}
