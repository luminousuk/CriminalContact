import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'cc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private readonly _settingsService: SettingsService
  ) { }

  ngOnInit() {
  }

  public get playerStartingAmount(): number {
    return this._settingsService.playerStartingAmount;
  }
  public set playerStartingAmount(value: number) {
    this._settingsService.playerStartingAmount = value;
  }

  public get accountInterestPct(): number {
    return this._settingsService.accountInterestPct;
  }
  public set accountInterestPct(value: number) {
    this._settingsService.accountInterestPct = value;
  }

  public get accountInterestInterval(): number {
    return this._settingsService.accountInterestInterval;
  }
  public set accountInterestInterval(value: number) {
    this._settingsService.accountInterestInterval = value;
  }

}
