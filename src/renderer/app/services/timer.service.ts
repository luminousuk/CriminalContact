import { Injectable } from '@angular/core';
import { interval } from "rxjs";
import { Guid } from "guid-typescript";

class TimerAction {
  private _lastRun: Date;
  private _id: Guid;
  constructor(
    private _action: () => void,
    private _interval: number
  ) {
    this._id = Guid.create();
    this._lastRun = new Date(0);
  }

  public get id(): Guid {
    return this._id;
  }

  public get shouldRun(): boolean {
    return Date.now() > this._lastRun.getTime() + this._interval;
  }

  public run(): void {
    this._action();
    this._lastRun = new Date();
  }

}

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _ticker = interval(500);

  private _actions: TimerAction[] = [];

  constructor() {
    this._ticker.subscribe(() => this.performActions());
  }

  private performActions(): void {
    if (this._actions.length === 0) {
      return;
    }

    for (let action of this._actions) {
      if (action.shouldRun) {
        action.run();
      }
    }
  }

  public subscribe(action: () => void, interval: number): string {
    const timerAction = new TimerAction(action, interval);
    this._actions.push(timerAction);

    return timerAction.id.toString();
  }

  public unsubscribe(id: string): void {
    this._actions = this._actions.filter(a => a.id.toString() !== id);
  }
}
