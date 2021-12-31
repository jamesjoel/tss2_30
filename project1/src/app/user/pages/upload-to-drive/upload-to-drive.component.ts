import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../../servcies/file-upload.service';

@Component({
  selector: 'app-upload-to-drive',
  templateUrl: './upload-to-drive.component.html',
  styleUrls: ['./upload-to-drive.component.css']
})
export class UploadToDriveComponent implements OnInit {

  title:any;
  constructor(private _upload : FileUploadService, private _router : Router) { }

  ngOnInit(): void {
  }

  upload(obj:any){
    let file = obj.files[0];
    let form = new FormData();
    form.append("file", file);
    form.append("title", this.title);
    this._upload.save(form).subscribe(result=>{
      console.log(result);
      this._router.navigate(["/my-drive"]);
    })
  }
}
