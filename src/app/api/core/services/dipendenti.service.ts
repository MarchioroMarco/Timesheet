import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DipendentiService {
  private readonly path = 'employees';
  
  
  static getCognome(soggetto: any): any {
    return soggetto.cognome;
  }
  static getNome(soggetto: any): any {
    return soggetto.nome;
  }
  static getEta(soggetto: any): any {
    return soggetto.eta;
  }

  public listaSoggetti:any[] = [  ];

  constructor(private api:ApiService) { }
  
 
}
