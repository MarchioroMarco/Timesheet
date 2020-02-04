import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DipendentiService {
  private readonly path = 'dipendenti';

  

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
  public getAll():Observable<any>{ //metodo che sarà poi comune a tutte le classi
    return this.api.get(this.path);
  }
  public getById(id:string):Observable<any>{
    //return this.listaSoggetti.find(i=> i.id == id); // i contiene tutta la lista soggetti (find restituisce il primo elemento che trova)
    return this.api.get(this.path + '/' + id);
  }
  public getByTax(nome : string): Observable<any>{
    return this.api.get(this.path + '?taxCode=' +nome);//se metto === non viene effettuato il casting automatico
  }
  public add(item:any){
   // const obj = {...item}; //clono l'oggetto item (per un nuovo indirizzo di memoria da dare a obj)
    //obj['id'] = uuid.v4();
    //this.listaSoggetti.push(obj);
    return this.api.post(this.path + '/inserisci', item);
  }
  public deleteById(id:any):Observable<any>{
  //  this.listaSoggetti = this.listaSoggetti.filter(item => item.id != id);
  return this.api.delete(this.path + '/elimina/' + id);
  }
  public replace(item:any):Observable<any>{
   /*  return this.listaSoggetti = this.listaSoggetti.map(i => { //i cicla in automatico ogni oggetto dell'array
      if(i.id == soggetto.id){
        return soggetto;
      }else{
        return i;
      }
    }) */
    return this.api.patch(this.path + '/' + item.id ,item );
  }
  public replace2(soggetto:any){
    return this.listaSoggetti = this.listaSoggetti.map(i =>{
      if(i.id == soggetto.id){
        return i;
      }else{
        return soggetto;
      }
    })
  }
  public  sum(val1:number , val2:number):number{
    return val1 + val2;
  }
 
}
