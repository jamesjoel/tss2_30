import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mydir]'
})
export class MydirDirective {

  oldStr:any;
  constructor(private _ele : ElementRef) {
    let x = this._ele.nativeElement;
    this.oldStr = this._ele.nativeElement.innerHTML;
    console.log(this.oldStr);
    x.style.backgroundColor = "red";
    x.style.color = "white";
    x.style.border = "5px solid green";
   }

   @HostListener('mouseover') demo(){
      this._ele.nativeElement.innerHTML="Hello World";
   }
   @HostListener('mouseout')demo2(){
     this._ele.nativeElement.innerHTML=this.oldStr;
   }
   

}
