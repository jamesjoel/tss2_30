import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/*
  FormBuilder ---- services
  FormGroup ---- Interface
  Validators ---- class
*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm:FormGroup;
  check=false;

  
  constructor(
    private _fb : FormBuilder
  ) {

    this.myForm = this._fb.group({
      first_name : ["", Validators.required],
      last_name : ["", Validators.required],
      address : ["", Validators.required]
    });

   }

  ngOnInit(): void {
  }
  submit(){

    if(this.myForm.invalid){
      this.check=true;
    }

    console.log(this.myForm.value);
  }

  
}
