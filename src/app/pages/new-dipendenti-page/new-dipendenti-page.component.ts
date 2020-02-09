import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DipendentiService } from 'src/app/api/core/services/dipendenti.service';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/api/core/services/domain.service';

@Component({
  selector: 'app-new-dipendenti-page',
  templateUrl: './new-dipendenti-page.component.html',
  styleUrls: ['./new-dipendenti-page.component.scss']
})
export class NewDipendentiPageComponent implements OnInit {
  public formGroup:FormGroup;
  public listaPaesi:any[]= [];
  constructor(public fb: FormBuilder, public dipendenti:DipendentiService, public router:Router, public domain:DomainService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name:[''],
      surname:[''],
      taxCode:[''],
      country:[''],
      province: [''],
      city:[''],
      address:[''],
      phoneNumber:[''],
      gender:[''],
      email:['']
    });
   
  }
  conferma(){
    
  }

}
