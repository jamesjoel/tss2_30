import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiletypeService {

  apiUrl = environment.API_URL+"/api/filetype";
  
  constructor(
    private _http : HttpClient
  ) { }

  getAll(){
    return this._http.get<any>(this.apiUrl);
  }

  save(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
}
