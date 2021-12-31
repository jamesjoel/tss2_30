import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../servcies/file-upload.service';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.css']
})
export class MyDriveComponent implements OnInit {

  allFiles:any=[];
  constructor(
    private _fileUpload : FileUploadService
  ) {
    this._fileUpload.getAll().subscribe(result=>{
      console.log(result);
      this.allFiles = result;
    })

   }

  ngOnInit(): void {
  }

}
