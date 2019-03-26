import { Injectable, ErrorHandler } from "@angular/core";
import { CcError } from "../core/cc-error";
import { LogService } from "./log.service";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(
    private readonly _logService: LogService
  ) { }

  handleError(error: any): void {
    console.error(error);

    if (error instanceof CcError) {
      this._logService.Error(error.message, error.toastTitle, error);
    } else {
      this._logService.Critical(error.message, "Critical Error", error);
    }
  }
}
