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
  }

  getAllStudents() {
    this.studentApi.find().subscribe((data: any) => {
      this.studentsList = data;
    });
  }

  selectStudent(studentId) {
    this.router.navigate([`${EDIT_STUDENT_URL}${studentId}`]);
  }

  deleteStudent(studentId) {
    event.stopPropagation();
    this.openConfirmDialog(studentId);
  }

  openConfirmDialog(studentId): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { studentId: studentId },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
    });
  }
}
