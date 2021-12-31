import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any, c:any) {
    if(b=="male"){

      let x = a*10/100;
      if(c<25){
        x += a*5/100;
      }
      return x;
    }else{
      
      let x = a*20/100;
      if(c<25){
        x += a*5/100;
      }
      return x;
    }
  }

}
