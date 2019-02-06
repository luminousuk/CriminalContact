import { Injectable } from '@angular/core';
import { BankService } from './bank.service';
import { PlayerService } from './player.service';
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _startTime: Date;
  private _endTime: Date;
  private _interestTimerId: string;
  private _interestIntervalMs: number = 1000;

  constructor(
    private readonly _bankService: BankService,
    private readonly _playerService: PlayerService,
    private readonly _timerService: TimerService
  ) { }

  public StartGame() {
    if (!this.canStartGame) {
      throw new Error("Unable to start game.");
    }

    this._startTime = new Date();
    this._interestTimerId = this._timerService.subscribe(() => this._bankService.GenerateInterest(0.1), this._interestIntervalMs);
  }

  public EndGame() {
    if (!this.hasStarted) {
      throw new Error("Game not started.");
    }

    if (this.hasEnded) {
      throw new Error("Game already ended.");
    }

    this._endTime = new Date();
    this._timerService.unsubscribe(this._interestTimerId);
  }

  public get startTime(): Date {
    return this._startTime;
  }

  public get endTime(): Date {
    return this._endTime;
  }

  public get hasStarted(): boolean {
    return !!this._startTime;
  }

  public get hasEnded(): boolean {
    return !!this._endTime;
  }

  public get canStartGame(): boolean {
    if (this.hasStarted) {
      return false;
    }

    if (this._playerService.players.length === 0) {
      return false;
    }

    return true;
  }
}
