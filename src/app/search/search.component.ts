import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { RecipeService } from '../recipe/recipe.service';
import { IRecipe } from '../shared/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  recipeList: IRecipe[] = [];
  @Input() isLoading: boolean
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.isLoading = true;
    const searchText = activatedRoute.snapshot.params.searchText;
    const searchPattern = new RegExp(searchText, 'gi')
    recipeService.loadRecipeList().subscribe(recipeList => {
      recipeList.forEach((recipe) => {
        if (searchPattern.test(recipe.recipeName)) {
          this.recipeList.push(recipe)
        }
      })
      this.isLoading = false;
    });
  }

  get isThereResult (): boolean {
    return this.recipeList.length > 0 ? true : false
  }
  ngOnInit(): void {
    
  }

}
