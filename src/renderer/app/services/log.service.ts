import { Injectable } from '@angular/core';
import { ILogEntry, LogSeverity } from '../core/log-entry.i';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private readonly _log: ILogEntry[] = [];

  constructor(
    private readonly _toastrService: ToastrService
  ) { }

  public get Logs(): ILogEntry[] {
    return this._log;
  }

  public Debug(message: string, category: string = null): void {
    this.AddLogEntry(LogSeverity.Debug, message, category);
  }

  public Info(message: string, category: string = null): void {
    this.AddLogEntry(LogSeverity.Info, message, category);
    this._toastrService.info(message, category);
  }

  public Warning(message: string, category: string = null, error: Error = null): void {
    this.AddLogEntry(LogSeverity.Warning, message, category, error);
    this._toastrService.warning(message, category);
  }

  public Error(message: string, category: string = null, error: Error = null): void {
    this.AddLogEntry(LogSeverity.Error, message, category, error);
    this._toastrService.error(message, category);
  }

  public Critical(message: string, category: string = null, error: Error = null): void {
    this.AddLogEntry(LogSeverity.Critical, message, category, error);
    this._toastrService.error(message, category);
  }

  private AddLogEntry(severity: LogSeverity, message: string, category: string = null, error: Error = null): void {
    const logEntry: ILogEntry = {
      timestamp: Date.now(),
      severity,
      message,
      category,
      error
    };

    this._log.push(logEntry);
  }
}
