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
    MatCardModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
