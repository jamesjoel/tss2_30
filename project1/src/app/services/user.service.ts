import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.API_URL;
  constructor(
    private _http : HttpClient
  ) { }

  save(obj:any){
    return this._http.post<any>(this.apiUrl+"/api/user", obj);
  }
  
  getAll(){
    return this._http.get<any>(this.apiUrl+"/api/user");

  }
  get(id:any){
    return this._http.get<any>(this.apiUrl+"/api/user/"+id);

  }
  delete(id:any){
    return this._http.delete<any>(this.apiUrl+"/api/user/"+id);

  }
  update(id:any, obj:any){
    return this._http.put<any>(this.apiUrl+"/api/user/"+id, obj);

  }

  updatePass(id:any, obj:any){
    return this._http.post<any>(this.apiUrl+"/api/userinfo/changepass/"+id, obj);
  }
  
  

}
