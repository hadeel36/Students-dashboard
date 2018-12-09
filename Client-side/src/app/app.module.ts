import { BrowserModule } from '@angular/platform-browser';
// Support animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
// Modules
import { MatModulesModule } from './shared/mat-modules/mat-modules.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StudentsListModule } from './components/students-list/students-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModulesModule,
    FormsModule,
    AppRoutingModule,
    StudentsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
