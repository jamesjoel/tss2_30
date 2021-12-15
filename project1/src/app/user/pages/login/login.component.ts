import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  checkForm = false;
  errorMsg = "";
  
  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService
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
      console.log("---------", result);
    }, err=>{
      if(err.error.type == 1)
      {
        this.errorMsg = "This Username/Email and Password is Incorrect !";
      }
      if(err.error.type ==2)
      {
        this.errorMsg = "This Password is Incorrect !";

      }
      
    })
  }

}
