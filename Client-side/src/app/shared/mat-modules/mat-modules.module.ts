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
  ],
})
export class MatModulesModule {}
