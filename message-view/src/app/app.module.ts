import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app/app-material-module/app-material.module';
import { RoutingModule } from '../app/pages/routing/routing.module';
import { HomeModule } from './pages/home/home.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HomeModule
   // RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
