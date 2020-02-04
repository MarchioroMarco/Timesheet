import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly host = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  public get(path:string):Observable<any>{ // all'interno dell'oggetto observable ci mette la chiamata al server (get restituisce un observable)
    return this.http.get(this.host+ '/' + path); ///test
  }
  public post(path:string, body:any):Observable<any>{
    return this.http.post(this.host+ '/' + path, body);
  }
  public delete(path:string):Observable<any>{
    return this.http.delete(this.host + '/'+ path);
  }
  public patch(path:string, body:any):Observable<any>{
    return this.http.patch(this.host+ '/' + path, body);
  }
}
