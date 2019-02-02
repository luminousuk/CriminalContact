import { Component, OnInit } from '@angular/core';

import { BankService } from '../services/bank.service';
import { Player } from '../shared/models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'cc-bank-test',
  templateUrl: './bank-test.component.html',
  styleUrls: ['./bank-test.component.scss']
})
export class BankTestComponent implements OnInit {

  public interestPct: number = 0.1;

  public transferFrom: Player;
  public transferTo: Player;
  public transferAmount: number;

  constructor(
    private _bankService: BankService,
    private _playerService: PlayerService
  ) { }

  ngOnInit() {
  }

  public get players(): Player[] {
    return this._playerService.players;
  }

  public deletePlayer(player:Player): void {
    this._playerService.deletePlayer(player);
  }

  public transfer(): void {
    const from = this.transferFrom.account.accountNumber;
    const to = this.transferTo.account.accountNumber;
    this._bankService.TransferFunds(from, to, this.transferAmount);
  }

  public getTotalPlayerBalance(): number {
    let total = 0;
    for(let player of this.players) {
      total += player.account.balance;
    }
    return total;
  }

  public addInterest(): void {
    this._bankService.GenerateInterest(this.interestPct);
  }

  public showTransactions(player: Player): void {
    console.log(`Transaction history for ${player.name}`);
    player.account.transactions.forEach(t => {
      console.log(`${t.description} - £${t.amount.toFixed(2)} - £${t.cumulativeBalance.toFixed(2)}`);
    });
    console.log(`Current balance: £${player.account.balance}`);
  }
}
