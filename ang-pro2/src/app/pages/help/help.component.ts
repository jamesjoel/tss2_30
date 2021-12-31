import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  l = 0;
  t = 0;
  color = "black";
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    let x = Math.random()*700;
    let y = Math.floor(x);

    let a = Math.random()*500;
    let b = Math.floor(a);

    this.l = y;
    this.t = b;

    let newcolor = "";
    for(let i = 1; i<=6; i++)
    {
      let temp = Math.random()*9; // 2.58755
      temp = Math.floor(temp); // 2
      newcolor += temp;
    }
    // console.log(newcolor);
    this.color = "#"+newcolor;
    
  }

}
