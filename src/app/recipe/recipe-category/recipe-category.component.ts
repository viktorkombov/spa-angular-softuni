import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})
export class RecipeCategoryComponent implements OnInit {

  recipeList: IRecipe[] = [];
  @Input() isLoading: boolean
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.isLoading = true;
    const searchText = activatedRoute.snapshot.queryParams['category'];
    const searchPattern = new RegExp(searchText, 'gi')
    recipeService.loadRecipeList().subscribe(recipeList => {
      recipeList.forEach((recipe) => {
        if (searchPattern.test(recipe.category)) {
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
