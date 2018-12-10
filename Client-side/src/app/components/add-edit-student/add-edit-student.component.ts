import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from 'src/sdk';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css'],
})
export class AddEditStudentComponent implements OnInit {
  selectedFile: File;
  selectedStudentId: string;
  selectedImgUrl = '../../../assets/images/avatar.png';

  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const urlSegType = this.router.snapshot.url[1].toString();
    console.log(urlSegType);
    if (urlSegType === 'edit') {
      this.selectedStudentId = this.router.snapshot.url[2].path;
    }
  }

  onFileChanged(event) {
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = ($event: any) => {
      this.selectedImgUrl = $event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  onUpload() {
    console.log('hello');
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedStudentId);
    this.http
      .post(
        LoopBackConfig.getPath() +
          '/' +
          LoopBackConfig.getApiVersion() +
          '/containers/images/upload',
        uploadData,
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}
