import { Injectable } from '@angular/core';

import { Player } from '../models/player.model';
import { BankService } from './bank.service';
import { RoleService, RoleNames } from './role.service';
import { CcError } from '../core/cc-error';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _players: Player[] = [];

  constructor(
    private readonly _bankService: BankService,
    private readonly _roleService: RoleService,
    private readonly _logService: LogService
    ) { }

  public get players(): Player[] {
    return this._players;
  }

  public createPlayer(firstName: string, lastName: string, startingBalance: number): Player {
    const player = new Player(firstName, lastName);
    this._players.push(player);
    this._players.sort((a, b) => a.name.localeCompare(b.name));
    
    this._bankService.OpenAccount(player, startingBalance);
    
    this._logService.Info(
      `${player.name} has been created`,
      "Player");

    return player;
  }

  public eliminatePlayer(player: Player): void {
    if (player.isEliminated) {
      throw new CcError("Player is already eliminated");
    }

    player.setEliminated();

    const undertaker = this._roleService.getPlayerForRole(RoleNames.Undertaker);
    if (!!undertaker && player !== undertaker) {
      const playerAccount = this._bankService.GetAccount(player.accountNumber);
      const undertakerAmount = playerAccount.balance * undertaker.role.config.deathInheritancePct;
      this._bankService.TransferFunds(player.accountNumber, undertaker.accountNumber, undertakerAmount, `Player elimination (${player.name})`);
    }

    this._logService.Info(
      `${player.name} has been eliminated`,
      "Player");
  }

  public deletePlayer(player: Player): void {
    this._players = this._players.filter(p => p !== player);

    this._logService.Info(
      `${player.name} has been deleted`,
      "Player");
  }
}
