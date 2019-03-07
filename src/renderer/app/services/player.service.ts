import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Player } from '../models/player.model';
import { BankService } from './bank.service';
import { RoleService, RoleNames } from './role.service';
import { CcError } from '../core/cc-error';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _players: Player[] = [];

  constructor(
    private readonly _bankService: BankService,
    private readonly _roleService: RoleService,
    private readonly _toastrService: ToastrService
    ) { }

  public get players(): Player[] {
    return this._players;
  }

  public createPlayer(firstName: string, lastName: string, startingBalance: number): Player {
    const player = new Player(firstName, lastName);
    this._players.push(player);
    this._players.sort((a, b) => a.name.localeCompare(b.name));
    
    this._bankService.OpenAccount(player, startingBalance);
    
    this._toastrService.success(
      `${player.name} has been created`,
      "Player created");

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

    this._toastrService.info(
      `${player.name} has been eliminated`,
      "Player eliminated");
  }

  public deletePlayer(player: Player): void {
    this._players = this._players.filter(p => p !== player);

    this._toastrService.error(
      `${player.name} has been deleted`,
      "Player deleted");
  }
}
