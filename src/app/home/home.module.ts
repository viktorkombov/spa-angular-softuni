import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeGuestsComponent } from './home-guests/home-guests.component';



@NgModule({
  declarations: [ HomeLoggedInComponent, HomeGuestsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeLoggedInComponent, HomeGuestsComponent
  ]
})
export class HomeModule { }
