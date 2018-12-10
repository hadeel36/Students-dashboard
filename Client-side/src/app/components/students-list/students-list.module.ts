import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { StudentsListComponent } from './students-list.component';
// Modules
import { MatModulesModule } from 'src/app/shared/mat-modules/mat-modules.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentsListComponent],
  imports: [MatModulesModule, CommonModule, RouterModule],
  exports: [StudentsListComponent],
})
export class StudentsListModule {}
