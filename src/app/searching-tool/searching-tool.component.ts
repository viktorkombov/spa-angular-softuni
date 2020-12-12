import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { RecipeService } from '../recipe/recipe.service';
import { IRecipe } from '../shared/interfaces';

@Component({
  selector: 'app-searching-tool',
  templateUrl: './searching-tool.component.html',
  styleUrls: ['./searching-tool.component.css']
})
export class SearchingToolComponent implements OnInit {

  recipeList: IRecipe[] = [];
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    const searchText = activatedRoute.snapshot.params.searchText;
    const searchPattern = new RegExp(searchText, 'gi')
    recipeService.loadRecipeList().subscribe(recipeList => {
      recipeList.forEach((recipe) => {
        if (searchPattern.test(recipe.recipeName)) {
          this.recipeList.push(recipe)
        }
      })
    });
  }

  get isThereResult (): boolean {
    return this.recipeList.length > 0 ? true : false
  }
  ngOnInit(): void {
    
  }

}
