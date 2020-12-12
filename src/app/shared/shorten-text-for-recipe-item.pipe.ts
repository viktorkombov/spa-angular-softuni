import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTextForRecipeItem'
})
export class ShortenTextForRecipeItemPipe implements PipeTransform {

  transform(value: string): string {
    return value?.length > 25 ? `${value.substr(0, 25)}...` : value;
  }

}