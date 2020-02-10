import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  canActivate(): boolean {
    return false;
  }
}   