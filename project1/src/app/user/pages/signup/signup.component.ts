import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkRePass, checkNum, checkLength } from '../../../helpers/custome.validation';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regForm:FormGroup;
  checkForm = false;
  afterSubmit = false;

  constructor(
    private _fb : FormBuilder,
    private _user : UserService,
    private _router : Router
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
    // console.log(this.regForm.value);
    this._user.save(this.regForm.value).subscribe(result=>{
      // console.log(result);
      if(result.success == true)
      {
        this.afterSubmit =  true;
        this.regForm.reset();
        this.checkForm = false;
        // this._router.navigate(["/login"]);
      }
    })
  }

}
