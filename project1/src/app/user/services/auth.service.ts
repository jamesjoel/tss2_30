import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL+"/api/auth";

  constructor(private _http : HttpClient) { }

  do_login(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
}