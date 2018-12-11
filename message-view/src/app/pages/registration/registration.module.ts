import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilsModule } from '../../utils/utils.module';


const routes: Routes = [
  { path: '', component: RegistrationComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilsModule
  ],
  exports: [RouterModule]
})
export class RegistrationModule { }
