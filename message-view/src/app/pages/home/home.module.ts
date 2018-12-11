import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RoutingModule } from '../routing/routing.module';
import { UtilsModule } from '../../utils/utils.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RoutingModule,
    UtilsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
