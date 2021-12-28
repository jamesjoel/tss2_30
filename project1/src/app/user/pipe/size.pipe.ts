import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(a:any):any {
    if(a<1024){
      return a+" Bytes";
    }
    else if(a >= 1024 && a < 1048576){
      let x = a/1024;
      let y = Math.floor(x);
      return y+" Kb";
    }
    else if(a >= 1048576){
      let x = a/1024;
      let y= x/1024;
      let z = Math.floor(y);
      return z+" Mb";
    }
  }

}
