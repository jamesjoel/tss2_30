import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FiletypeService } from '../../../services/filetype.service';
import { Router } from '@angular/router';

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
    private _router : Router
    ) {
    this.typeForm = this._fb.group({
      type : ["", Validators.required],
      type_name : ["", Validators.required],
      icon : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.typeForm.invalid){
      this.checkForm = true;
      return;
    }
    this._fileServ.save(this.typeForm.value).subscribe(result=>{
      console.log(result);
      this._router.navigate(["/admin/file-type"]);
    })
  }
}
