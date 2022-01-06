import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-statecity',
  templateUrl: './statecity.component.html',
  styleUrls: ['./statecity.component.css']
})
export class StatecityComponent implements OnInit {

  stateArr:any=[];
  state:any;
  cityArr:any=[];
  constructor(
    private _http : HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get<any>("http://localhost:3000/api/state").subscribe(result=>{
        // console.log(result);
        this.stateArr = result;
    })
  }

  getState(){
    this.cityArr = this.stateArr[0][this.state];
  }

}
