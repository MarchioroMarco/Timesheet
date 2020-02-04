import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      nome:['', [Validators.required]],
      cognome:['', [Validators.required]],
      tax_code:['', [Validators.required]],
     /*  country:[''],
      province: [''],
      city:[''], */
      indirizzo:[''],
      telefono:[''],
      sesso:[''],
      email:[''],
      id:['', [Validators.required]]
    });
    this.domain.getCountry().subscribe((resp)=>{
      this.listaPaesi = resp;
    });
  }
  conferma(){
    this.dipendenti.add(this.formGroup.value).subscribe((resp)=>{
      this.router.navigate(["/dipendenti"]);
    });
   
    const lista = this.dipendenti.getAll();
    console.log("Valore lista: ", lista);
  }

}
