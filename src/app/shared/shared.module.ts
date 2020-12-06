import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from './shorten-text.pipe';



@NgModule({
  declarations: [ShortenTextPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenTextPipe
  ]
})
export class SharedModule { }
