import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'cc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _bankInterestIntervalMs: number = 10000;

  constructor(
    private _playerService: PlayerService,
    private _bankService: BankService
  ) { }

  ngOnInit() {
  }

  public get bankInterestIntervalMs(): number {
    return this._bankInterestIntervalMs;
  }
  public set bankInterestIntervalMs(value: number) {
    this._bankInterestIntervalMs = value;
    this._bankService.SetInterestIntervalMs(value);
  }

  public get playerCount(): number {
    return this._playerService.players.length;
  }

  public get totalMoney(): number {
    let total = 0;
    for (let player of this._playerService.players) {
      total += player.account.balance;
    }
    return total;
  }

  public get transactionCount(): number {
    let transactionCount = 0;
    for (let player of this._playerService.players) {
      transactionCount += player.account.transactions.length;
    }
    return transactionCount;
  }

  public get deathCount(): number {
    return this._playerService.players.filter(p => p.isDead).length;
  }

  public seedPlayers(): void {
    [
      {firstName: "Jeff", lastName: "Goldblum", startingAmount: 5000},
      {firstName: "Brian", lastName: "Blessed", startingAmount: 1750},
      {firstName: "Tony", lastName: "Hawk", startingAmount: 4500},
      {firstName: "Lionel", lastName: "Ritchie", startingAmount: 9900},
      {firstName: "Bruce", lastName: "Willis", startingAmount: 7420},
      {firstName: "Bill", lastName: "Gates", startingAmount: 50000},
      {firstName: "Katy", lastName: "Price", startingAmount: 2130},
      {firstName: "Princess", lastName: "Peach", startingAmount: 6400},
      {firstName: "Snoop", lastName: "Dogg", startingAmount: 420},
      {firstName: "Arnold", lastName: "Schwarzeneggar", startingAmount: 6666}
    ].forEach(p => {
      this._playerService.createPlayer(p.firstName, p.lastName, p.startingAmount);
    });
  }

}
