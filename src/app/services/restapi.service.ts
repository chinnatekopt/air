import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { throwError, Observable, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { AuthenticateService } from './authenticate.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestapiService implements HttpInterceptor {

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticateService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authenticationService.getToken}`
            }
            // setParams: {
            //   companyName: `${currentUser.suplierCompanyName}`
            // }
        });
    }
    return next.handle(request);
}
  /**
   * This Handler contains REST_URL which is used to host the server.
   */

  /**
   * This displays the error message when the server is not taking the data.
   * There are Two types errors.
   * Client-side errors.
   * Server-side errors
   */

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      if (error.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload();
      }
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


  apiDelegate(req: any) {
    const httpOptions = {
      params: req.params
    };
    const url = `${environment.restURL}/`;
    switch (req.method.toLowerCase()) {
      case 'get':
        return this.httpClient.get(url + req.action, httpOptions).pipe(retry(2), catchError(this.handleError));
      case 'post':
        return this.httpClient.post(url + req.action, req.data);
      case 'put':
        return this.httpClient.put(url + req.action, req.data).pipe(retry(2), catchError(this.handleError));
      case 'patch':
        return this.httpClient.patch(url + req.action, req.data).pipe(retry(2), catchError(this.handleError));
      case 'delete':
        return this.httpClient.delete(url + req.action, httpOptions).pipe(retry(2), catchError(this.handleError));
      default:
        break;
    }
  }
}
