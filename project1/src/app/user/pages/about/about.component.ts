import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  obj={
    name : "",
    age : null,
    city : ""
  }
  data:any = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 30,
      city : "mumbai"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    
    this.data.push(this.obj);
    
  }

}
