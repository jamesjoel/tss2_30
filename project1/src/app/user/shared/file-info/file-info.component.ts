import { Component, OnInit } from '@angular/core';
import { FiletypeService } from '../../../services/filetype.service';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.css']
})
export class FileInfoComponent implements OnInit {

  allTypes : any = [];

  a = "<h1>rohit</h1>";
  constructor(
    private _filetype : FiletypeService
  ) {

    this._filetype.getAll().subscribe(result=>{
      // console.log(result)
      this.allTypes = result;
    })

   }

  ngOnInit(): void {
  }

}
