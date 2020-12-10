import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from './shorten-text.pipe';
import { FilterPipe } from './filter.pipe';
import { LinkValidatorDirective } from './url-validator.directive';
import { UsernameValidatorDirective } from './username-validator.directive';



@NgModule({
  declarations: [ShortenTextPipe, FilterPipe, LinkValidatorDirective, UsernameValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenTextPipe,
    FilterPipe,
    LinkValidatorDirective,
    UsernameValidatorDirective
  ]
})
export class SharedModule { }
