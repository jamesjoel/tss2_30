import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  stu:any={
    name : "",
    email : "",
    address : ""
  }
  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
  }

  add(){
    this._http.post<any>("http://localhost:3000/api/school", this.stu).subscribe(result=>{
      console.log(result);
    })
  }

}
