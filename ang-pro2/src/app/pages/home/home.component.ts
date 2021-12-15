import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  demo() {
    let x = 100;
    console.log(x);
    console.log(this.x);
  }

  a="rohit";
  b="indore";
  c="mumbai";

  x=20;
  y=50;
  z = 30;

  city="pune";

  constructor(public hello : HelloService) { }

  ngOnInit(): void {

    this.hello.demo
  }

  

  

}
