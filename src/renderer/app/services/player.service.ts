import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { BankService } from './bank.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _players: Player[] = [];

  constructor(private _bankService: BankService) { }

  public get players(): Player[] {
    return this._players;
  }

  public createPlayer(firstName: string, lastName: string, startingBalance: number): Player {
    const account = this._bankService.OpenAccount(startingBalance);
    const player = new Player(firstName, lastName, account);
    this._players.push(player);

    return player;
  }

  public deletePlayer(player:Player): void {
    this._players = this._players.filter(p => p !== player);
  }
}
