import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from './shorten-text.pipe';
import { FilterPipe } from './filter.pipe';
import { LinkValidatorDirective } from './url-validator.directive';
import { UsernameValidatorDirective } from './username-validator.directive';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [ShortenTextPipe, FilterPipe, LinkValidatorDirective, UsernameValidatorDirective, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenTextPipe,
    FilterPipe,
    LinkValidatorDirective,
    UsernameValidatorDirective,
    LoaderComponent
  ]
})
export class SharedModule { }
