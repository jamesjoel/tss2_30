import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  total:number=0;
  allProduct:any=[];

  cartData:any=[];
  dataComming=true;
  constructor(
    private _http : HttpClient,
    private _cart : CartService
  ) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe(result=>{
      console.log(result);
      this.allProduct = result;
      this.dataComming=false;
    })

    this._cart.cartSubject.subscribe(result=>{
      this.total = result;
    })

   }

  ngOnInit(): void {
  }

  recData(obj:any){
    // console.log("--------------", obj);
    this.cartData.push(obj);
    localStorage.setItem("cart", JSON.stringify(this.cartData));
  }

  demo(){ 
    // console.log(this.total++);
    let x = this.total;
    x++;
    this._cart.update(x);
  }

}
