import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentApi } from 'src/sdk';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css'],
})
export class ConfirmDeleteDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentApi: StudentApi,
  ) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.studentApi.deleteById(this.data.studentId).subscribe(res => {
      this.dialogRef.close();
    });
  }
}
