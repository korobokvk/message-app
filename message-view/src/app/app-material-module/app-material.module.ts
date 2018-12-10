import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatInputModule, 
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule } from '@angular/material';
import { MatDialogModule, MatDialog,
	MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ],
})
export class AppMaterialModule { }
