import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL+"/api/auth";

  constructor(private _http : HttpClient, private _router : Router) { }

  do_login(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }

  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }


  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }

  getUserInfo(){
    return this._http.get<any>("http://localhost:3000/api/userinfo", 
    {
      headers : { Authorization : JSON.stringify(localStorage.getItem("token")) }
    });
  }

}
