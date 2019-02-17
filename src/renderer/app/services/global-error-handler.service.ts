import { Injectable, ErrorHandler } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CcError } from '../core/cc-error';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(
    private readonly _toastrService: ToastrService
  ) { }

  handleError(error: any): void {
    console.error(error);

    if (error instanceof CcError) {
      this._toastrService.error(error.message, error.toastTitle);
      return;
    }

    // Log to error log
    
  }
}
