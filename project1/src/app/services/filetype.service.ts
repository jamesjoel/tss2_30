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
  delete(id:any){
    return this._http.delete<any>(this.apiUrl+"/"+id);
  }

  get(id:any){
    return this._http.get<any>(this.apiUrl+"/"+id);
  }

  update(id:any, obj:any){
    return this._http.put<any>(this.apiUrl+"/"+id, obj);
  }
}
