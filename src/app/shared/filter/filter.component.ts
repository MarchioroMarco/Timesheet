import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  ricerca:EventEmitter<any> = new EventEmitter<any>();
  
  public formGroup:FormGroup;
  constructor(public fb: FormBuilder) { }


  ngOnInit() {
    this.formGroup = this.fb.group({
      id:['']
    });
  }

  ricercaSogg(){
    this.ricerca.emit(this.formGroup.value['id']);
  }
}
