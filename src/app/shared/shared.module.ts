import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from './shorten-text.pipe';
import { FilterPipe } from './filter.pipe';
import { LinkValidatorDirective } from './url-validator.directive';
import { UsernameValidatorDirective } from './username-validator.directive';
import { LoaderComponent } from './loader/loader.component';
import { ShortenTextForRecipeItemPipe } from './shorten-text-for-recipe-item.pipe';
import { LoaderDirective } from './loader.directive';



@NgModule({
  declarations: [ShortenTextPipe, FilterPipe, ShortenTextForRecipeItemPipe, LinkValidatorDirective, UsernameValidatorDirective, LoaderComponent, ShortenTextForRecipeItemPipe, LoaderDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenTextPipe,
    FilterPipe,
    LinkValidatorDirective,
    UsernameValidatorDirective,
    LoaderComponent,
    ShortenTextForRecipeItemPipe
  ]
})
export class SharedModule { }
