import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string): string {
    return value?.length > 65 ? `${value.substr(0, 65)}...` : value;
  }
}