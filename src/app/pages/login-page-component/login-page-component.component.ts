import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/api/core/services/domain.service';
import { UtentiService } from 'src/app/api/core/services/utenti.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.scss']
})
export class LoginPageComponentComponent implements OnInit {
  public formGroup:FormGroup;
  constructor(public fb: FormBuilder, public router:Router, public domain:DomainService, public utentiService:UtentiService, public tok:AuthenticationService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }

  conferma(){
   
    this.utentiService.trova(this.formGroup.value).subscribe((resp)=>{
      console.log("RESP" + resp);
      if(resp == true){
        this.tok.setAuthenticated();
        this.router.navigate(['/dipendenti']); 
      }else{
        this.router.navigate(['/login']);
      }
    });
      
    
  }
}


