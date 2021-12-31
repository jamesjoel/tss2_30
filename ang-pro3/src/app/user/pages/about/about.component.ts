import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  allPhotos:any=[];
  constructor(
    private _http : HttpClient
  ) {
    this._http.get<any>("http://localhost:3000/api/upload").subscribe(result=>{
      this.allPhotos = result;
    })
   }

  ngOnInit(): void {
  }

  upload(obj:any){
    //console.log(obj.files[0]);
    let file = obj.files[0];

    let form = new FormData();

    form.append("image", file);

    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe(result=>{
      // console.log(result);
      /*
    { image_name : "http://llc"}
      */
      this.allPhotos.unshift(result);
    })
  }

}
