import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from "../../../services/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  userInfo : any;

  userForm : FormGroup;
  checkForm = false;

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
}
