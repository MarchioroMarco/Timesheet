import { Component } from '@angular/core';
import { DataTableOptions } from './api/datatable-option';
import { DatatableComponent } from './shared/datatable/datatable.component';
import { DipendentiService } from './api/core/services/dipendenti.service';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'ciao!!!';
  public isVisible:boolean = true;
  public currentIndex:number;
  public listaNomi:string[] = ['mario','luca','maria'];
  public options:DataTableOptions = {
    colsOptions:[
      {label: "Nome dipendente", name: "name"},
      {label: "Cognome dipendente", name: "surname"},
    ]
  };
  public listaSoggetti:any[] = [
    {nome: 'Mario', cognome:'Rossi', eta: 30},
    {nome:'Claudio', cognome: 'Poggi', eta: 34},
    {nome: 'Enrico', cognome: 'Farranti', eta: 26},
    {nome: 'Anna', cognome: 'Rossi', eta: 60},

  ];
  public listaSoggetti2:any[] = [];
  public currentSelectionInput:any = 0;
  public currentSelectionOutput:any = 0;
  //public duplicato: boolean = false;
  constructor(
    public authService: AuthenticationService,
    public dipendente: DipendentiService){ //riceve un parametro e lo rende disponibile per tutta la classe
  }

  cambiaTitolo(){
    this.title = "Ciao Rogerio!!";
  }
  toggle(){
    this.isVisible = !this.isVisible; //inverte il valore prima di assegnarlo a inVisible
  }
  select(event:any){

    this.listaSoggetti2 = event;
  }
  selectInput(event: any){
    this.currentSelectionInput = event[0];
  }
  selectOutput(event: any){
    this.currentSelectionOutput = event[0];
  }

  spostaDestra(){
    if(this.currentSelectionInput!=0){
    this.listaSoggetti2.push(this.currentSelectionInput);
    this.listaSoggetti = this.listaSoggetti.filter(i=> i.nome != this.currentSelectionInput.nome);
    }
    this.currentSelectionInput=0;
  }
  spostaSinistra(){
    if(this.currentSelectionOutput!=0){
      this.listaSoggetti.push(this.currentSelectionOutput);
      this.listaSoggetti2 = this.listaSoggetti2.filter(i => i.nome != this.currentSelectionOutput.nome);
    }
    this.currentSelectionOutput=0;
  }

 /*  spostaSinistra(){
    if(this.listaSoggetti2.length > 0){
    this.currentSelectionInput = this.listaSoggetti2.pop();
    this.listaSoggetti = this.listaSoggetti.filter(i=> i.nome != this.currentSelectionInput.nome);
    this.listaSoggetti.push(this.currentSelectionInput);
    } */
  

  

}
