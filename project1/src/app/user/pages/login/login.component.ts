import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  checkForm = false;
  errorMsg = "";

  checkEmailErr =  false;
  checkPassErr =  false;
  
  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService,
    private _router : Router
  ) {
    this.loginForm = this._fb.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }


  submit(){
    if(this.loginForm.invalid){
      this.checkForm = true;
      return;
    }
    this._auth.do_login(this.loginForm.value).subscribe(result=>{
      // console.log("---------", result);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/my-account"]);
      
    }, err=>{
      if(err.error.type == 1)
      {
        this.checkEmailErr = true;
        this.errorMsg = "This Username/Email and Password is Incorrect !";
      }
      if(err.error.type ==2)
      {
        this.checkEmailErr = false;
        this.checkPassErr = true;
        this.errorMsg = "This Password is Incorrect !";

      }
      
    })
  }

  reset1(){
    if(this.checkEmailErr==true){
      this.checkForm = false;
      this.loginForm.controls.email.reset();
    }
  }
  reset2(){
    if(this.checkPassErr==true){
      this.checkForm = false;
      this.loginForm.controls.password.reset();
    }
  }

}
