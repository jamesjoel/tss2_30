import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:any;
  constructor() { }

  ngOnInit(): void {
  }

  demo2(a:any){
    console.log("----------", a);
    this.name = a;
  }

}
