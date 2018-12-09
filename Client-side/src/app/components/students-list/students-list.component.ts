import { Component, OnInit } from '@angular/core';
// Services
import { StudentApi, StudentInterface } from 'src/sdk';

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

  constructor(private studentApi: StudentApi) {}

  ngOnInit() {
    this.studentApi.find().subscribe((data: any) => {
      this.studentsList = data;
    });
  }
}
