import { Injectable } from '@angular/core';
import { BankService } from './bank.service';
import { PlayerService } from './player.service';
import { TimerService } from './timer.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _startTime: Date;
  private _endTime: Date;
  private _interestTimerId: string;
  private _interestIntervalMs: number;
  private _elapsedTime: number = 0;
  private _elapsedTimeTimerId: string;

  constructor(
    private readonly _bankService: BankService,
    private readonly _playerService: PlayerService,
    private readonly _timerService: TimerService,
    private readonly _settingsService: SettingsService
  ) {
    this._settingsService.accountInterestInterval$.subscribe(intervalMs => {
      this._interestIntervalMs = intervalMs * 1000;
      console.debug(`GameService._interestIntervalMs = ${intervalMs * 1000}`);

      this.AttemptResetInterestTimer();
    });

    this._settingsService.accountInterestAutoCalculateEnabled$.subscribe(autoInterestEnabled => {
      if (autoInterestEnabled) {
        this.AttemptResetInterestTimer();
      } else {
        this.AttemptDisableInterestTimer();
      }
      console.debug(`GameService: autoInterestEnabled = ${autoInterestEnabled}`);
    });
  }

  private AttemptResetInterestTimer(): void {
    if (this.hasStarted && !this.hasEnded) {
      this.AttemptDisableInterestTimer();
      // Doesn't take into account current time remaining
      this._interestTimerId = this._timerService.subscribe(() => this._bankService.GenerateInterest(), this._interestIntervalMs);
    }
  }

  private AttemptDisableInterestTimer(): void {
    if (!!this._interestTimerId) {
      this._timerService.unsubscribe(this._interestTimerId);
      this._interestTimerId = null;
    }
    
  }

  public StartGame() {
    if (!this.canStartGame) {
      throw new Error("Unable to start game.");
    }

    this._startTime = new Date();
    this._elapsedTimeTimerId = this._timerService.subscribe(() => {
      this._elapsedTime = Math.floor((Date.now() - this.startTime.getTime()) / 1000);
    }, 1000);
    this.AttemptResetInterestTimer();
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
    this._timerService.unsubscribe(this._elapsedTimeTimerId);
  }

  public get startTime(): Date {
    return this._startTime;
  }

  public get elapsedTime(): number {
    return this._elapsedTime;
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
