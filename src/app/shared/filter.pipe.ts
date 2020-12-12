import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from './interfaces';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
 
  transform(items: IRecipe[], searchText: string): any[] {
    
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }

    const newSearch = new RegExp(searchText, 'gi')
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return newSearch.test(it.recipeName);
    });
  }
}