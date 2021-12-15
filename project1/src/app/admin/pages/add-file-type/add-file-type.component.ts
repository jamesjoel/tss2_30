import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FiletypeService } from '../../../services/filetype.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-file-type',
  templateUrl: './add-file-type.component.html',
  styleUrls: ['./add-file-type.component.css']
})
export class AddFileTypeComponent implements OnInit {
  typeForm : FormGroup;
  checkForm = false;

  

  constructor(
    private _fb : FormBuilder,
    private _fileServ : FiletypeService,
    private _router : Router,
    private _actRoute : ActivatedRoute
    ) {
    this.typeForm = this._fb.group({
      _id : [""],
      type : ["", Validators.required],
      type_name : ["", Validators.required],
      icon : ["", Validators.required]
    });

    // getting id in URL/Query String/APi
    let id = this._actRoute.snapshot.paramMap.get("id");
    if(id){
      this._fileServ.get(id).subscribe(result=>{
        // console.log(result);
        this.typeForm.setValue(result);
      })
    }


   }

  ngOnInit(): void {
  }

  submit(){
    if(this.typeForm.invalid){
      this.checkForm = true;
      return;
    }
    if(this.typeForm.controls._id.value ==""){
      this._fileServ.save(this.typeForm.value).subscribe(result=>{
        console.log(result);
        this._router.navigate(["/admin/file-type"]);
      })
    }
    else{
      this._fileServ.update(this.typeForm.controls._id.value, this.typeForm.value).subscribe(result=>{
       this._router.navigate(["/admin/file-type"]);

     })
   }
  }
}
