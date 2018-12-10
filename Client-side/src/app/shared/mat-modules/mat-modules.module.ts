import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatPaginatorModule,
  MatMenuModule,
  MatTableModule,
  MatSelectModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
})
export class MatModulesModule {}
