import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTitle'
})
export class SortTitlePipe implements PipeTransform {

  transform(t:any) {
    if(t.length > 10){
      let newStr = t.slice(0, 10);
      newStr += " ...";
      return newStr;
    }
  }

}
