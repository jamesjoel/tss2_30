import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  apiUrl = environment.API_URL;
  constructor(private _http : HttpClient) { }

  save(obj:any){
    return this._http.post<any>(this.apiUrl+"/api/fileupload", obj, {
      headers : { Authorization : JSON.stringify(localStorage.getItem("token")) }
    });
  }

  getAll(){
    return this._http.get<any>(this.apiUrl+"/api/fileupload", {
      headers : { Authorization : JSON.stringify(localStorage.getItem("token")) }
    });
  }


}
