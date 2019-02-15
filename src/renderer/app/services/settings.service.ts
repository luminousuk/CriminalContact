import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly _debounceTimeMs = 500;
  
  private _playerStartingAmount = new BehaviorSubject<number>(5000);
  private _accountInterestPct = new BehaviorSubject<number>(0.1);
  private _accountInterestAutoCalculateEnabled = new BehaviorSubject<boolean>(true);
  private _accountInterestInterval = new BehaviorSubject<number>(60);

  public playerStartingAmount$: Observable<number> =
    this._playerStartingAmount
      .pipe(debounceTime(this._debounceTimeMs), distinctUntilChanged());

  public accountInterestPct$: Observable<number> =
    this._accountInterestPct
      .pipe(debounceTime(this._debounceTimeMs), distinctUntilChanged());

  public accountInterestAutoCalculateEnabled$: Observable<boolean> =
    this._accountInterestAutoCalculateEnabled
      .pipe(debounceTime(this._debounceTimeMs), distinctUntilChanged());

  public accountInterestInterval$: Observable<number> =
    this._accountInterestInterval
      .pipe(debounceTime(this._debounceTimeMs), distinctUntilChanged());

  public get playerStartingAmount(): number {
    return this._playerStartingAmount.getValue();
  }
  public set playerStartingAmount(value: number) {
    this._playerStartingAmount.next(value);
  }

  public get accountInterestPct(): number {
    return this._accountInterestPct.getValue();
  }
  public set accountInterestPct(value: number) {
    this._accountInterestPct.next(value);
  }

  public get accountInterestAutoCalculateEnabled(): boolean {
    return this._accountInterestAutoCalculateEnabled.getValue();
  }
  public set accountInterestAutoCalculateEnabled(value: boolean) {
    this._accountInterestAutoCalculateEnabled.next(value);
  }

  public get accountInterestInterval(): number {
    return this._accountInterestInterval.getValue();
  }
  public set accountInterestInterval(value: number) {
    this._accountInterestInterval.next(value);
  }
}
