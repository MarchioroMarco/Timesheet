import { Component, OnInit } from '@angular/core';
import { DataTableOptions } from 'src/app/api/datatable-option';
import { DipendentiService } from 'src/app/api/core/services/dipendenti.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/core/services/api.service';

@Component({
  selector: 'app-dipendenti-page',
  templateUrl: './dipendenti-page.component.html',
  styleUrls: ['./dipendenti-page.component.scss']
})
export class DipendentiPageComponent implements OnInit {
 

  public options:DataTableOptions = {
    colsOptions:[
      {label: "Nome Dipendente", name: "name"},
      {label: "Cognome Dipendente", name: "surname"},
     //{label: "Età ", name: "age"},
      {label: "Opzioni", name:"opzioni"}
    ]
  };
  public lista:any[];
  constructor(public dipendenteService:DipendentiService, public router:Router, public api:ApiService) { } //router mi permette di navigare tra le pagine

  ngOnInit() {
    //this.lista = this.dipendenteService.getAll();
    this.api.get('dipendenti').subscribe((resp)=>{
      console.log("Risposta",resp);
    });
   
    this.api.get('nazioni').subscribe((resp)=>{
      console.log("Risposta2",resp);
    });
    this.dipendenteService.getAll().subscribe((resp)=>{
      this.lista = resp.response;
    })
  }
  select(event: any[]){
    const sogg = event[0];
    this.router.navigate(['dipendenti', sogg.id]); //navigate vuole in ingresso un array composto da due elementi (url di destinazione, parametro opzionale)

  }
  edit(event:any){
    const sogg = event;
    this.dipendenteService.replace(sogg).subscribe((resp)=>{
      this.lista = resp;
    })
    this.router.navigate(['dipendenti/edit', sogg.id]);
  }
  
  delete(event:any){
     const sogg = event;
     this.dipendenteService.deleteById(sogg.id).subscribe((resp)=>{
       this.lista = resp;
     });
     
  }
  ricerca(event:any){
    if(event != ""){
      this.dipendenteService.getByTax(event).subscribe((resp)=>{
        this.lista = resp;
      })
    }else{
      this.dipendenteService.getAll().subscribe((resp)=>{
        this.lista = resp;
      })
    }
   
  }

}
