import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { GameService } from '../../services/game.service';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'cc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  constructor(
    private readonly _playerService: PlayerService,
    private readonly _gameService: GameService,
    private readonly _bankService: BankService,
  ) { }

  ngOnInit() {
  }

  public get playerCount(): number {
    return this._playerService.players.length;
  }

  public get totalMoney(): number {
    return this._bankService.GetTotalMoneyInBank();
  }

  public get transactionCount(): number {
    return this._bankService.GetTotalTransactionCount();
  }

  public get deathCount(): number {
    return this._playerService.players.filter(p => p.isDead).length;
  }

  public seedPlayers(): void {
    [
      {firstName: "Jeff", lastName: "Goldblum", startingAmount: 5000},
      {firstName: "Brian", lastName: "Blessed", startingAmount: 5000},
      {firstName: "Tony", lastName: "Hawk", startingAmount: 5000},
      {firstName: "Lionel", lastName: "Ritchie", startingAmount: 5000},
      {firstName: "Bruce", lastName: "Willis", startingAmount: 5000},
      {firstName: "Bill", lastName: "Gates", startingAmount: 15000},
      {firstName: "Katy", lastName: "Price", startingAmount: 5000},
      {firstName: "Princess", lastName: "Peach", startingAmount: 5000},
      {firstName: "Snoop", lastName: "Dogg", startingAmount: 5000},
      {firstName: "Arnold", lastName: "Schwarzeneggar", startingAmount: 5000}
    ].forEach(p => {
      this._playerService.createPlayer(p.firstName, p.lastName, p.startingAmount);
    });
  }

  public StartGame(): void {
    this._gameService.StartGame();
  }

  public StopGame(): void {
    this._gameService.StopGame();
  }

  public get startGameButtonDisabled(): boolean {
    return this._gameService.isRunning || this._gameService.hasEnded;
  }

  public get stopGameButtonDisabled(): boolean {
    return !this._gameService.isRunning;
  }

  public get showCurrentGamePanel(): boolean {
    return this._gameService.hasStarted;
  }

  public get gameStartTime(): Date {
    return new Date(this._gameService.startTimeMs);
  }

  public get gameElapsedSeconds(): number {
    return this._gameService.elapsedSeconds;
  }

}
