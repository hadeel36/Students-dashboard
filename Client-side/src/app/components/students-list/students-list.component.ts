import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { StudentApi, StudentInterface } from 'src/sdk';
import { HttpClient } from '@angular/common/http';

const EDIT_STUDENT_URL = 'student/edit/';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  public displayedColumns: Array<string> = [
    'photo',
    'name',
    'birthday',
    'action',
  ];
  public studentsList: Array<StudentInterface>;

  constructor(
    private studentApi: StudentApi,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.studentApi.find().subscribe((data: any) => {
      this.studentsList = data;
    });
  }

  selectStudent(studentId) {
    this.router.navigate([`${EDIT_STUDENT_URL}${studentId}`]);
  }

  // getImgURL(studentId) {
  //   let defaultImg = true;
  //   this.http.get(`http://0.0.0.0:3000/api//containers/images/download/${studentId}.png`).subscribe(res => {
  //     if (res) {
  //       defaultImg = false;
  //     } else {
  //       defaultImg = true;
  //     }
  //   });
  //   if (defaultImg) {
  //     return '../../../assets/images/avatar.png';
  //    } else {
  //      return `http://0.0.0.0:3000/api//containers/images/download/${studentId}.png`
  //    }
  // }

  deleteStudent(studentId) {
    event.stopPropagation();
    console.log(studentId);
  }
}
