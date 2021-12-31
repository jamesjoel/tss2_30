import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from "../../../services/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { checkRePass } from '../../../helpers/custome.validation';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  userInfo : any;

  userForm : FormGroup;
  passForm : FormGroup;
  checkForm = false;
  checkForm2 = false;
  passMsg="";

  constructor(
    private _auth : AuthService,
    private _fb : FormBuilder,
    private _userServ : UserService
  ) {

    this.userForm = this._fb.group({
      _id : [""],
      fullname : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : [""],
      status : [""],
      address : ["", Validators.required],
      gender : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required]
    })
    this.passForm = this._fb.group({
      oldpass : ["", Validators.required],
      password : ["", Validators.required],
      re_password : ["", Validators.required]
    },
    {
      validator : [checkRePass()]
    })


    this._auth.getUserInfo().subscribe(result=>{
      // console.log(result);
      this.userInfo = result;
      this.userForm.setValue(result);
      // this.userForm.controls.email.disable();
    })
   }

  ngOnInit(): void {
  }
  update(btn:any){
    if(this.userForm.invalid){
      this.checkForm = true;
      return;
    }
    this._userServ.update(this.userForm.controls._id.value, this.userForm.value).subscribe(result=>{
      console.log(this.userForm.value);
      this.userInfo = this.userForm.value;
      btn.click();
    })    
  }


  updatePass(btn:any){
    if(this.passForm.invalid){
      this.checkForm2=true;
      return;
    }
    // console.log(this.passForm.value);
    this._userServ.updatePass(this.userInfo._id, this.passForm.value).subscribe(result=>{
      console.log(result);
      btn.click();
      this.passForm.reset();
      this.passMsg="";
    }, err=>{
      // console.log(err.error);
      if(err.error){
        this.passMsg = "This Password Dose not match in your account !";
      }
    })

  }
}
