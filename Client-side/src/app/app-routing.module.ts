import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent,
  },
  // {
  //   path: 'student/add',
  //   loadChildren: '',
  // },
  // {
  //   path: 'student/edit/:id',
  //   loadChildren: '',
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
