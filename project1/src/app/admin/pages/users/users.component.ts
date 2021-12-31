import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers : any = [];
  constructor(
    private _user : UserService
  ) {
    this._user.getAll().subscribe(result=>{
      this.allUsers = result;
    })
   }

  ngOnInit(): void {
  }
  change(obj:any){
    // if(obj.status == 1){
    //   let updateObj = { status : 0};
    // }
    // else{
      
    //   let updateObj = { status : 1};
    // }
    obj.status = !obj.status ? 1 : 0;
    this._user.update(obj._id, obj).subscribe(result=>{
      console.log(result);
    })
    
  }

}
