import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new BehaviorSubject(0);
  cart = this.cartSubject.asObservable();
  constructor() { }
  async update(a:any){
    this.cartSubject.next(a);
  }
}
