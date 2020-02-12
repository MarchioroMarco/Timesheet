import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private autService: AuthenticationService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  canActivate(): boolean {
    if(this.autService.isAuthenticated()){
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}   