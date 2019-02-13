import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  playerStartingAmount: number = 5000;

  accountInterestPct: number = 0.1;
  accountInterestInterval: number = 60;
}
