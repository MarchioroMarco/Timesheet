import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  
  private readonly path = 'countries';

  constructor(private api:ApiService) { }

  public getCountry():Observable<any>{
    return this.api.get(this.path);
  }
}
