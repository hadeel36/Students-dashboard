import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:
      './components/students-list/students-list.module#StudentsListModule',
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
