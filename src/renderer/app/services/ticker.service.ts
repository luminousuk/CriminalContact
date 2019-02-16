import { Injectable } from '@angular/core';
import { interval, Subscription } from "rxjs";
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  private _subscriptions: Map<string, Subscription>;

  constructor() {
    this._subscriptions = new Map<string, Subscription>();
  }

  public subscribe(action: () => void, intervalMs: number): string {
    const guid = Guid.create().toString();
    const subscription = interval(intervalMs).subscribe(action);
    this._subscriptions.set(guid, subscription);

    return guid;
  }

  public unsubscribe(id: string): void {
    if (!this._subscriptions.has(id)) {
      throw new Error(`Subscription with id ${id} does not exist.`);
    }

    this._subscriptions.get(id).unsubscribe();
    this._subscriptions.delete(id);
  }
}
