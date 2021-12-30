import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  str:any;
  myCart:any=[];
  constructor() {
    this.str = localStorage.getItem("cart");
    // console.log(this.myCart);
    this.myCart=JSON.parse(this.str);
    
   }

  ngOnInit(): void {
    // console.log(localStorage.getItem("cart"));
  }

  clear(){
    localStorage.removeItem("cart");
    this.myCart = [];
  }

}
