import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total:any;
  constructor(public _cart : CartService) {
    this._cart.cartSubject.subscribe(result=>{
      this.total = result;
    })
   }

  ngOnInit(): void {
  }

}
