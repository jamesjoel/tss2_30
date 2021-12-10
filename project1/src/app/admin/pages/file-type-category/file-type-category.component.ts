import { Component, OnInit } from '@angular/core';
import { FiletypeService } from '../../../services/filetype.service';

@Component({
  selector: 'app-file-type-category',
  templateUrl: './file-type-category.component.html',
  styleUrls: ['./file-type-category.component.css']
})
export class FileTypeCategoryComponent implements OnInit {

  allFileType : any=[];
  constructor(
    private _fileServ : FiletypeService
  ) {
    this._fileServ.getAll().subscribe(result=>{
      this.allFileType = result;
    })
   }

  ngOnInit(): void {
  }

}
