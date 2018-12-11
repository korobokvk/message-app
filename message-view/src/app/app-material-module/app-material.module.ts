import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatInputModule, 
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule } from '@angular/material';
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
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
})
export class AppMaterialModule { }
