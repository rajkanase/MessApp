import { Component, OnInit } from '@angular/core';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';

@Component({
  selector: 'app-add-mess',
  templateUrl: './add-mess.component.html',
  styleUrls: ['./add-mess.component.scss']
})
export class AddMessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options: FancyImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
};


onUpload(file: UploadedFile) {
  console.log(file.response);
}

}
