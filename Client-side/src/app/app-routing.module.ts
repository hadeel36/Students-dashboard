import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent,
  },
  {
    path: 'student/add',
    component: AddEditStudentComponent,
  },
  {
    path: 'student/edit/:id',
    component: AddEditStudentComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
