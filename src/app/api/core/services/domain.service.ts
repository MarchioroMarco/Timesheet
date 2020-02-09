import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  
  private readonly path = 'countries';

  constructor(private api:ApiService) { }

 
}
