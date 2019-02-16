import { Injectable } from '@angular/core';
import { BankService } from './bank.service';
import { PlayerService } from './player.service';
import { TickerService } from './ticker.service';
import { SettingsService } from './settings.service';
import { ClockService } from './clock.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _startTimeMs: number;
  private _endTimeMs: number;
  private _interestTimerId: string;
  private _interestIntervalMs: number;

  constructor(
    private readonly _bankService: BankService,
    private readonly _playerService: PlayerService,
    private readonly _tickerService: TickerService,
    private readonly _settingsService: SettingsService,
    private readonly _clockService: ClockService
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
      this._interestTimerId = this._tickerService.subscribe(() => this._bankService.GenerateInterest(), this._interestIntervalMs);
    }
  }

  private AttemptDisableInterestTimer(): void {
    if (!!this._interestTimerId) {
      this._tickerService.unsubscribe(this._interestTimerId);
      this._interestTimerId = null;
    }
  }

  public StartGame() {
    if (this.hasEnded) {
      throw new Error("Game already ended.");
    }

    if (this.isRunning) {
      throw new Error("Game already running.");
    }

    if (this._playerService.players.length === 0) {
      throw new Error("Not enough players to start game.");
    }

    this._clockService.Start();
    this._startTimeMs = this._startTimeMs || this._clockService.now;

    this.AttemptResetInterestTimer();
  }

  public StopGame() {
    this.AttemptDisableInterestTimer();
    this._clockService.Stop();
  }

  public EndGame() {
    this.StopGame();

    if (this.hasEnded) {
      throw new Error("Game already ended.");
    }

    this._endTimeMs = this._clockService.now;
    this._tickerService.unsubscribe(this._interestTimerId);
  }

  public get startTimeMs(): number {
    return this._startTimeMs;
  }

  public get elapsedSeconds(): number {
    return this._clockService.elapsedSeconds;
  }

  public get endTime(): number {
    return this._endTimeMs;
  }

  public get hasStarted(): boolean {
    return !!this._startTimeMs;
  }

  public get isRunning(): boolean {
    return this._clockService.isRunning;
  }

  public get hasEnded(): boolean {
    return !!this._endTimeMs;
  }
}
