import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProduct:any=[];
  btnMsg = "Get Data";
  show=false;

  constructor(
    private _product : ProductService
  ) {

    

   }

  ngOnInit(): void {
  }

  demo(){
    this.btnMsg = "Loading..";
    this.show=true;

    this._product.getAll().subscribe(result=>{
      this.allProduct = result;
      this.show=false;
      this.btnMsg = "Get Data";
    })


    // this._http.get<any>("https://fakestoreapi.com/products").subscribe(result=>{
    //   console.log(result);
    //   this.allProduct = result;
    //   this.show=false;
    //   this.btnMsg = "Get Data";
    // })
  }

}
