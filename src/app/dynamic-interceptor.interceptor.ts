import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DynamicInterceptorInterceptor implements HttpInterceptor {

  constructor() {
    console.log("Initiate Interceptor");
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const url = request.url;
    //const headers = request.headers;

    //const modifiedUrl = url.replace('api','new-api-endpoint');
    //const modifiedHeaders = headers.set('Authorization','Bearer');
    //const clonedReq = request.clone({url: modifiedUrl, headers: modifiedHeaders});

    const authToken = 'your_dynamic_auth_token';

    // Dynamically modify URL
    const modifiedRequest = request.clone({url: this.modifyUrl(request.url)})

    // Dynamically add headers

    const headers = this.addDynamicHeaders(request.headers);
    modifiedRequest.headers.set('Authorization',`Bearer ${authToken}` + headers)
    return next.handle(modifiedRequest);
  }

  private modifyUrl(url: string): string {
    // Your logic to modify the URL dynamically
    return url + '/modified';
  }

  private addDynamicHeaders(headers: HttpHeaders): HttpHeaders {
    // Your logic to add headers dynamically
    return headers.append('Custom-Header', 'Dynamic-Value');
  }
}
