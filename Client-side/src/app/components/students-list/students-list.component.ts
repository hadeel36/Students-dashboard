import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { StudentApi, StudentInterface } from 'src/sdk';

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

  constructor(private studentApi: StudentApi, private router: Router) {}

  ngOnInit() {
    this.studentApi.find().subscribe((data: any) => {
      this.studentsList = data;
    });
  }

  selectStudent(studentId) {
    this.router.navigate([`${EDIT_STUDENT_URL}${studentId}`]);
  }

  deleteStudent(studentId) {
    event.stopPropagation();
    console.log(studentId);
  }
}
