import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  demo(){
    console.log("hello world ....");
  }
}
