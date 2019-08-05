import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  isLogin = false;

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): 
              boolean  | Observable<boolean> | Promise<boolean> {
                return this.isLogin;
  }

  constructor(service : AuthenticationService) { 
    this.isLogin = service.isLogin
  }
}
