import { Component, OnInit } from '@angular/core';
import { DataTableOptions } from 'src/app/api/datatable-option';
import { Router } from '@angular/router';
import { DipendentiService } from 'src/app/shared/services/dipendenti.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dipendenti-page',
  templateUrl: './dipendenti-page.component.html',
  styleUrls: ['./dipendenti-page.component.scss']
})
export class DipendentiPageComponent implements OnInit {

  public param: any;
 

  public options:DataTableOptions = {
    colsOptions:[
      {label: "Nome Dipendente", name: "nome"},
      {label: "Cognome Dipendente", name: "cognome"},
     //{label: "Età ", name: "age"},
      {label: "Opzioni", name:"opzioni"}
    ]
  };
  public lista:any[];
  constructor(
    public dipendentiService: DipendentiService,
    public dipendenteService:DipendentiService,
     public router:Router) { } //router mi permette di navigare tra le pagine

  ngOnInit() {
    console.log("init")
    this.fetchAllDipendenti();
  }

  fetchAllDipendenti(){

    
    this.dipendentiService.getAll(null || null).subscribe(
      (response) => {
        if (response) {
         this.lista = response.dipendentiData;
        }
      },
      (error) => {
       console.log(error)
      }
    )
  }

  select(event: any[]){
    const sogg = event[0];
    this.router.navigate(['dipendenti', sogg.id]); //navigate vuole in ingresso un array composto da due elementi (url di destinazione, parametro opzionale)

  }

  edit(event:any){
 
  }
  
  delete(event:any){
 
     
  }

  ricerca(event:any){
  
   
  }

}
