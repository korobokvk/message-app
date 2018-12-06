import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../../app-material-module/app-material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainPageModule { }
