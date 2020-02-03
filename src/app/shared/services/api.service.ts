
import { throwError as observableThrowError ,  Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    if (error.status === 401) {

      localStorage.removeItem('current_user');
      localStorage.removeItem('UiProfileMap');
      return observableThrowError('Unauthorized');
    } else if (error.status === 404) {
    
      return observableThrowError('Not Found');
    } else if (error.status === 500) {
   
      if(error.error.code === '23505'){
        return observableThrowError('Duplicate key');
      }
      else{
        return observableThrowError('Internal Server Error');
      }
    } else if (error.status === 503) {
     
      return observableThrowError('Service Unavailable');
    } else if (error.message) {
      return observableThrowError(error.message);
    } else {
      return observableThrowError(error.json());
    }
  }

  get(path: string, params): Observable<any> {

    const Headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    return this.http.get(`${environment.endpoint}${path}`,
      { headers: Headers, params: params, withCredentials: true }).pipe(
        catchError(this.formatErrors),
        map((res: Response) => res));

        //viva la ...
  }

  get2(path: string, params): Observable<any> {

    const Headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    return this.http.get(path,
      { headers: Headers, params: params, withCredentials: true }).pipe(
        catchError(this.formatErrors),
        map((res: Response) => res));
  }

  put(path: string, body: Object = {}): Observable<any> {

    return this.http.put(
      `${environment.endpoint}${path}`,
      body,
      { withCredentials: true }
    ).pipe(
      catchError(this.formatErrors),
      map((res: Response) => res));
  }

  post(path: string, body: Object = {}): Observable<any> {

    

    return this.http.post(
      `${environment.endpoint}${path}`,
      body,
      { withCredentials: true }
    ).pipe(
      catchError(this.formatErrors),
      map((res: Response) => res));
  }

  delete(path): Observable<any> {

    return this.http.delete(
      `${environment.endpoint}${path}`,
      { withCredentials: true }
    ).pipe(
      catchError(this.formatErrors),
      map((res: Response) => res));
  }

}
