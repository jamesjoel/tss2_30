import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  num = 20;

  check=true;
  obj = {
    "font-size" : "20px",
    "background-color" : "red"
  }
  constructor() {
    console.log(this.num);
   }

  ngOnInit(): void {
  }
  demo(x:any){
    x.click();
  }

}
