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
  colorName = "blue";
  h = 100;
  w = 100;
  color2 = "white";

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
  demo4(){
    this.colorName = "green";
  }
  demo5(){
    this.colorName = "blue";
  }
  demo6(){
    this.h++;
    this.w++;
  }

  demo7(){
    console.log("+++++++++=");
  }
  demo8(){
    console.log("************************************");
  }

  demo9(){
    this.color2 = "red";
  }
  demo10(){
    this.color2 = "white";
  }
  demo11(){
    console.log("#################");
  }
  demo15(){
    console.log("$$$$$$$$$$$$$$$4");
    return false;
  }
}
