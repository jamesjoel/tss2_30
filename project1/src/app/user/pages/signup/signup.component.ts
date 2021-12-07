import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkRePass, checkNum, checkLength } from '../../../helpers/custome.validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regForm:FormGroup;
  checkForm = false;

  constructor(
    private _fb : FormBuilder
  ) {
    this.regForm = this._fb.group({
      fullname : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      gender : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required]
    },
    {
      validator : [checkRePass(), checkNum(), checkLength()]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.regForm.invalid){
      this.checkForm=true;
      return;
    }
  }

}
