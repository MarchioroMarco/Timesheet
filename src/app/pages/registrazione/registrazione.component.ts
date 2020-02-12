import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/api/core/services/domain.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  
  public formGroup:FormGroup;
  constructor(public fb: FormBuilder, public router:Router, public domain:DomainService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }

}
