import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
// Services
import { StudentApi, StudentInterface } from 'src/sdk';

const EDIT_STUDENT_URL = 'student/edit/';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  limit = 10;
  skip = 0;
  studentsCount: 0;
  public displayedColumns: Array<string> = [
    'photo',
    'name',
    'birthday',
    'action',
  ];
  public studentsList: Array<StudentInterface>;

  constructor(
    public dialog: MatDialog,
    private studentApi: StudentApi,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getAllStudents();
    this.getStudentsCount();
  }

  getAllStudents(limit = this.limit, skip = this.skip) {
    console.log(limit);
    this.studentApi
      .find({ limit: limit, skip: skip })
      .subscribe((data: any) => {
        this.studentsList = data;
      });
  }

  getStudentsCount() {
    this.studentApi.getCount().subscribe(data => {
      this.studentsCount = data.count;
    });
  }

  selectStudent(studentId) {
    this.router.navigate([`${EDIT_STUDENT_URL}${studentId}`]);
  }

  deleteStudent(studentId) {
    event.stopPropagation();
    this.openConfirmDialog(studentId);
  }

  onPaginateChange(event) {
    this.getAllStudents(event.pageSize, event.pageSize * event.pageIndex);
  }

  openConfirmDialog(studentId): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { studentId: studentId },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
      this.getStudentsCount();
    });
  }
}
