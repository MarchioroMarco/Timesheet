import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DipendentiService {

  constructor(private api: ApiService) { }

  getAll(params?: any): Observable<any> {
    return this.api.get("/dipendenti").pipe(
      map((res: any) => {
        console.log("Get all dipendenti", res);
        if (res.status === 200) return res.response;
        else return null;
      }));
  }
  
}