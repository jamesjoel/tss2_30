import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiletypeService {

  apiUrl = environment.API_URL;
  
  constructor(
    private _http : HttpClient
  ) { }

  getAll(){
    return this._http.get<any>(this.apiUrl+"/api/filetype");
  }
}
