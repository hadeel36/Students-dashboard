import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoopBackConfig, StudentApi, StudentInterface } from 'src/sdk';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css'],
})
export class AddEditStudentComponent implements OnInit {
  selectedFile: File;
  selectedStudentId: string;
  selectedImgUrl = '../../../assets/images/avatar.png';
  studentForm: FormGroup;
  action: string;
  studentInfo: StudentInterface;

  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    private studentApi: StudentApi,
  ) {}

  ngOnInit() {
    this.action = this.router.snapshot.url[1].toString();
    if (this.action === 'edit') {
      this.selectedStudentId = this.router.snapshot.url[2].path;

      this.studentApi
        .findById(this.selectedStudentId)
        .subscribe((data: StudentInterface) => {
          this.studentInfo = data;
          this.createStudentForm();
          this.studentForm.patchValue(data);
          if (data.photo) {
            this.selectedImgUrl = `http://0.0.0.0:3000/api//containers/images/download/${
              this.selectedStudentId
            }.png`;
          }
        });
    }

    this.createStudentForm();
  }

  createStudentForm() {
    this.studentForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      birth_date: new FormControl(new Date(), [Validators.required]),
      hobbies: new FormControl(''),
      photo: new FormControl(false),
    });
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
    const uploadData = new FormData();
    uploadData.append(
      'myFile',
      this.selectedFile,
      `${this.selectedStudentId}.png`,
    );
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
        this.studentForm.controls['photo'].setValue(true);
      });
  }

  submit(studentFormValue) {
    console.log(this.studentForm.value);
    if (this.action === 'add') {
      this.studentApi
        .create(studentFormValue)
        .subscribe(res => console.log(res), err => console.error(err));
    } else if (this.action === 'edit') {
      this.studentApi
        .patchAttributes(this.selectedStudentId, studentFormValue)
        .subscribe(res => console.log(res), err => console.error(err));
    }
  }
}
