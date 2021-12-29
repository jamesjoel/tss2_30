import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProduct:any=[];
  dataComming=true;
  constructor(
    private _http : HttpClient
  ) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe(result=>{
      console.log(result);
      this.allProduct = result;
      this.dataComming=false;
    })
   }

  ngOnInit(): void {
  }

}
