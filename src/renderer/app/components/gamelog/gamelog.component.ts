import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';
import { ILogEntry, LogSeverity } from '../../core/log-entry.i';

@Component({
  selector: 'cc-gamelog',
  templateUrl: './gamelog.component.html',
  styleUrls: ['./gamelog.component.scss']
})
export class GameLogComponent {
  constructor(
    private readonly _logService: LogService
  ) {
  }

  public get Logs(): ILogEntry[] {
    return this._logService.Logs;
  }

  public GetIconClassForSeverity(severity: LogSeverity): string {
    switch(severity) {
      case LogSeverity.Debug: {
        return "code";
      }
      case LogSeverity.Info: {
        return "info";
      }
      case LogSeverity.Warning: {
        return "warning";
      }
      case LogSeverity.Error: {
        return "warning";
      }
      case LogSeverity.Critical: {
        return "x";
      }
    }
  }
}