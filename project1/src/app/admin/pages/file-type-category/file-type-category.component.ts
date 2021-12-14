import { Component, OnInit } from '@angular/core';
import { FiletypeService } from '../../../services/filetype.service';

@Component({
  selector: 'app-file-type-category',
  templateUrl: './file-type-category.component.html',
  styleUrls: ['./file-type-category.component.css']
})
export class FileTypeCategoryComponent implements OnInit {

  allFileType : any=[];

  fileType:any;
  constructor(
    private _fileServ : FiletypeService
  ) {
    this._fileServ.getAll().subscribe(result=>{
      this.allFileType = result;
    })
   }

  ngOnInit(): void {
  }

  askDelete(obj:any){
    // console.log("--------------", obj);
    this.fileType = obj;
  }

  confDelete(btn:any){
    this._fileServ.delete(this.fileType._id).subscribe(result=>{
      // console.log(result);
      let n = this.allFileType.indexOf(this.fileType);
      this.allFileType.splice(n, 1);
      btn.click();
    })
  } 

}
