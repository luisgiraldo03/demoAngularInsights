import { ErrorHandler, Injectable } from '@angular/core';
import { MyMonitoringService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler{

  constructor(private myMonitoringService: MyMonitoringService) {
    super();
   }

   override handleError(error: Error) {
    this.myMonitoringService.logException(error); // Manually log exception
}
}
