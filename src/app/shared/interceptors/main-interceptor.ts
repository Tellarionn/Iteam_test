import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private readonly apiKey: string = 'live_pDVcH6YlW5VbPKSxBPH1eTYqfPCGZyRsq8DlZM4lL4YFpPDwaL1MHt4Iog02xgVt';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({ setHeaders: { 'x-api-key': this.apiKey } });
    return next.handle(request);
  }
}
