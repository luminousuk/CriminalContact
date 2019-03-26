import { Injectable } from "@angular/core";
import { TickerService } from "./ticker.service";

@Injectable({
  providedIn: "root"
})
export class ClockService {

  private _lastTick = 0;
  private _elapsedMs = 0;
  private _tickerId: string;

  constructor(
    private readonly _tickerService: TickerService
  ) { }

  public Start(): void {
    this._lastTick = this.now;
    this._tickerId = this._tickerService.subscribe(this.Tick.bind(this), 250);
  }

  public Stop(): void {
    if (!!this._tickerId) {
      this._tickerService.unsubscribe(this._tickerId);
      this._tickerId = null;
    }
  }

  private Tick(): void {
    this._elapsedMs += Math.max(0, this.now - this._lastTick);
    this._lastTick = this.now;
  }

  public get elapsedSeconds(): number {
    return Math.floor(this._elapsedMs / 1000);
  }

  public get now(): number {
    return Date.now();
  }

  public get isRunning(): boolean {
    return !!this._tickerId;
  }
}
