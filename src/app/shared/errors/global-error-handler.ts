import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(Injector) private injector: Injector) {}

  private get notifierService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  handleError(error): void {
    this.notifierService.error(error);
  }
}
