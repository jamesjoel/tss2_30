import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {

  constructor(
    private _authServ : AuthService,
    private _router : Router
  ){

  }
  canActivate() {
    if(this._authServ.isLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
