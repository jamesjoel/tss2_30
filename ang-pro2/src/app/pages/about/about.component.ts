import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  a = "hello";
  b = "btn-primary";
  x= "Double Click Me";
  y = "Click";

  check = false;
  constructor() { }

  ngOnInit(): void {
  }
  demo1(){
    this.a = "welcome";
    this.b = "btn-danger";
  }

  demo2(){
    this.x = "Clicked......";
  }
  demo3(){
    // this.y = "Loading ...";
    // this.check=true;
    this.check = !this.check;
  }

}
