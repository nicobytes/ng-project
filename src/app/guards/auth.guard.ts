import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, UrlTree } from '@angular/router';
import { TokenService } from './../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private token: TokenService,
    private router: Router,
  ) { }

  canActivate(): boolean | UrlTree {
    const token = this.token.getToken();
    if (!token) {

      return this.router.parseUrl('/login');
    }
    return true;
  }

}
