import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() p:any;
  @Output() sendToParent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(obj:any){
    // console.log(obj);
    this.sendToParent.emit(obj);
  }
}
