import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-recipe-item-for-search',
  templateUrl: './recipe-item-for-search.component.html',
  styleUrls: ['./recipe-item-for-search.component.css']
})
export class RecipeItemForSearchComponent implements OnInit {

  @Input() recipe: IRecipe;
  constructor() { }

  ngOnInit(): void {
  }

}
