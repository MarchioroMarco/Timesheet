import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private readonly path = 'utenti';

  constructor(private api:ApiService) { }
  public add(item:any){
    return this.api.post(this.path + '/inserisci', item);
  }

  public trova(item:any){
    return this.api.post(this.path + '/trova', item);
  }

}
