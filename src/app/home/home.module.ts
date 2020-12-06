import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeGuestsComponent } from './home-guests/home-guests.component';
import { RecipeModule } from '../recipe/recipe.module';



@NgModule({
  declarations: [ HomeLoggedInComponent, HomeGuestsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RecipeModule
  ],
  exports: [
    HomeLoggedInComponent, HomeGuestsComponent
  ]
})
export class HomeModule { }
