import { Component, OnInit } from '@angular/core';
import { DipendentiService } from 'src/app/api/core/services/dipendenti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainService } from 'src/app/api/core/services/domain.service';

@Component({
  selector: 'app-edit-dipendenti-page',
  templateUrl: './edit-dipendenti-page.component.html',
  styleUrls: ['./edit-dipendenti-page.component.scss']
})
export class EditDipendentiPageComponent implements OnInit {
  public formGroup:FormGroup;
  public soggetto;
  public listaPaesi:any[]=[];
  constructor(public fb: FormBuilder, public dipendenti:DipendentiService, public router:Router, public routeActive:ActivatedRoute, public domain:DomainService) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.params.id;
    this.formGroup = this.fb.group({
      nome:['', [Validators.required]],
      cognome:['', [Validators.required]],
      tax_code:['', [Validators.required]],
      /* country:[''],
      province: [''],
      city:[''],
      address:[''], */
      telefono:['', [Validators.required]],
      sesso:[''],
      email:['']
    });
    this.domain.getCountry().subscribe((resp)=>{
      this.listaPaesi = resp;
    });
    this.dipendenti.getById(id).subscribe((resp)=>{
      this.soggetto = resp.response;
      this.formGroup = this.fb.group({
        nome:[this.soggetto.nome],
        cognome:[this.soggetto.cognome],
        tax_code:[this.soggetto.tax_code],
        indirizzo:[this.soggetto.indirizzo],
        telefono:[this.soggetto.telefono],
        sesso:[this.soggetto.sesso],
        email:[this.soggetto.email]
      });
    });
;
   
  }
  conferma(){
    const id = this.routeActive.snapshot.params.id;
    const contenitore = this.formGroup.value;
    contenitore['id'] = id; 
    this.dipendenti.replace(contenitore).subscribe((resp)=>{
      this.dipendenti = resp;
    });
    this.router.navigate(["/dipendenti"]);
   
  }


}
