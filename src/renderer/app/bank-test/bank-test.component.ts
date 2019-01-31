import { Component, OnInit } from '@angular/core';

import { BankService } from '../services/bank.service';
import { Player } from '../shared/models/player.model';

@Component({
  selector: 'cc-bank-test',
  templateUrl: './bank-test.component.html',
  styleUrls: ['./bank-test.component.scss']
})
export class BankTestComponent implements OnInit {

  public players: Player[] = [];

  public interestPct: number = 0.1;

  public newPlayerName: string = "";
  public newPlayerAmount: number = 1000;

  public transferFrom: Player;
  public transferTo: Player;
  public transferAmount: number;

  constructor(private bankService: BankService) { }

  ngOnInit() {
  }

  public createPlayer(): void {
    const player = this.createAccountAndPlayer(this.newPlayerName, this.newPlayerAmount);
    this.players.push(player);
  }

  public deletePlayer(player:Player): void {
    this.players = this.players.filter(p => p !== player);
  }

  public transfer(): void {
    const from = this.transferFrom.account.accountNumber;
    const to = this.transferTo.account.accountNumber;
    this.bankService.TransferFunds(from, to, this.transferAmount);
  }

  public getTotalPlayerBalance(): number {
    let total = 0;
    for(let player of this.players) {
      total += player.account.balance;
    }
    return total;
  }

  public addInterest(): void {
    this.bankService.GenerateInterest(this.interestPct);
  }

  public showTransactions(player: Player): void {
    player.account.transactions.forEach(t => {
      console.log(`${t.description} - £${t.amount.toFixed(2)} - £${t.cumulativeBalance.toFixed(2)}`);
    });
    console.log(`Current balance: £${player.account.balance}`);
  }

  private createAccountAndPlayer(name: string, balance: number): Player {
    const account = this.bankService.OpenAccount(balance);
    console.log(`Opened account #${account.accountNumber} with £${account.balance}`);
    
    const player = new Player(name, account);
    console.log(`Created player ${player.name}`);

    return player;
  }
}
