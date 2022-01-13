import { Component, OnInit } from '@angular/core';

interface Stu{
  name : string;
  age : number|null;
  city : string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  obj:Stu={
    name : "",
    age : null,
    city : ""
  }

  data:Stu[]=[
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 25,
      city : "indore"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.data.push(this.obj);
    this.obj={
      name : "",
      age : null,
      city : ""
    }
  }
}
