import { Component, OnInit } from '@angular/core';
import { DipendentiService } from 'src/app/api/core/services/dipendenti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomainService } from 'src/app/api/core/services/domain.service';

@Component({
  selector: 'app-edit-dipendenti-page',
  templateUrl: './edit-dipendenti-page.component.html',
  styleUrls: ['./edit-dipendenti-page.component.scss']
})
export class EditDipendentiPageComponent {
  public formGroup:FormGroup;
  public soggetto;
  public listaPaesi:any[]=[];
  




}
