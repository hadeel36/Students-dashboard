import { BrowserModule } from '@angular/platform-browser';
// Support animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
// Modules
import { SDKBrowserModule } from '../sdk';
import { MatModulesModule } from './shared/mat-modules/mat-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StudentsListModule } from './components/students-list/students-list.module';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';

@NgModule({
  declarations: [AppComponent, AddEditStudentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModulesModule,
    SDKBrowserModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StudentsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
