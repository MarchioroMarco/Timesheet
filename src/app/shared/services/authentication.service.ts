import { Injectable, Inject } from '@angular/core';

import { from as observableFrom, of as observableOf, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}

export interface LoginContext {
  username: string;
  password: string;
}

const credentialsKey = 'token';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {

  private readonly host = "http://localhost:8090/auth";
  public token: boolean = false;

  private _credentials: string;
  private _features: any = null;
  
  constructor(
    private http:HttpClient,
    private router: Router) {
    this._credentials = localStorage.getItem(credentialsKey);
  }

  public post(path:string, body:any):Observable<any>{
    return this.http.post(this.host+ '/' + path, body);
  }

  public trovaTok(item:any){
    return this.post( 'signin', item);
  }
  /**
   * Authenticates the user.
   * @param {LoginContext} context The login parameters.
   * @return {Observable<Credentials>} The user credentials.
   */
  login(context: LoginContext): Observable<any> {
    let bodyString = JSON.stringify(context); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    
    return null;
  }

  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return observableOf(true);
  }

  logOut(){
    this.token = false;
    //sessionStorage.removeItem(credentialsKey); //possibile soluzione
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */

  isAuthenticated(): boolean {
    try {
    /*   if(window.sessionStorage.getItem("token")){
        this.token = true;
      }
      else{
        return false;
      } */
      return this.token = sessionStorage.getItem('token') != null;
    } catch (e) {
      return false;
    }
  }

  setAuthenticated(resp: any): boolean {
   
    // try {

    //   return (this.token = true);
    // } catch (e) {
    //   return false;
    // }
    if(resp.status === 200)
    {
      sessionStorage.setItem('token', resp.response.token);
      this.router.navigate(['dipendenti'], {replaceUrl: true});
      return true;
    }
    return false;
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): string {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   */
  private setCredentials(credentials?: string) {
    this._credentials = credentials || null;

    if (credentials) {
      sessionStorage.setItem(credentialsKey, credentials);
    } else {
      //sessionStorage.removeItem(credentialsKey);
      sessionStorage.removeItem(credentialsKey);
    }
  }

}
