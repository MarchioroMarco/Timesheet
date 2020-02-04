import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableOptions } from 'src/app/api/datatable-option';

@Component({
  selector: 'app-datatable', //nome del componente
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input()
  public lista: any[];

  @Input()
  public options:DataTableOptions;

  @Input()
  public multiClick:boolean;

  @Output()
  onSelect:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onEdit:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDelete:EventEmitter<any> = new EventEmitter<any>();

  public currentIndex:boolean[] = [false];


  constructor() {
   }

  ngOnInit() {
  }

  delete(index:number){
    this.onDelete.emit(this.lista[index]);
    this.lista.splice(index,1);
  }
  edit(index:number){
    this.onEdit.emit(this.lista[index]);
  }

  select(index: number){
    if(this.multiClick == null){
      return;
    }
    if(this.multiClick){
      this.currentIndex[index] = !this.currentIndex[index];}
    else{
      var temp:boolean = this.currentIndex[index];
      this.currentIndex = this.currentIndex.map(acc=>false);//map deve prendere in ingresso un elemento e cosa fa in return
      this.currentIndex[index] = !temp;
    }
    const listaSelect: any[] = [];
    this.currentIndex.forEach((item, index)=> {
      if(item){
        listaSelect.push(this.lista[index]);
      }
    })
    this.onSelect.emit(listaSelect);

  }


}
