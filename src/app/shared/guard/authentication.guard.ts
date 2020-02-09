import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }
   
    this.router.navigate(['/home'], { replaceUrl: true });
    return false;
  }
}   