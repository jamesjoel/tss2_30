import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {

  @Output() test = new EventEmitter;


  a = "rohit";
  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    this.test.emit(this.a);
  }

}
