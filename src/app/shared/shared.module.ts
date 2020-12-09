import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from './shorten-text.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [ShortenTextPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenTextPipe,
    FilterPipe
  ]
})
export class SharedModule { }
