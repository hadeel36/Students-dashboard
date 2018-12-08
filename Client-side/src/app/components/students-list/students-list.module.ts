import { NgModule } from '@angular/core';
// Components
import { StudentsListComponent } from './students-list.component';
// Modules
import { MatModulesModule } from 'src/app/shared/mat-modules/mat-modules.module';

@NgModule({
  declarations: [StudentsListComponent],
  imports: [MatModulesModule],
})
export class StudentsListModule {}
