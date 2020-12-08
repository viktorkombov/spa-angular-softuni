import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IRecipe } from 'src/app/shared/interfaces';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: IRecipe;
  creator: string;
  selectedDifficultyLevel: string;
  selectedNecesseryTime: string;
  selectedCategory: string;
  constructor(
    private themeService: RecipeService,
    private router: Router,
    private authService: AuthService,
    private recipeDetailsComponent: RecipeDetailsComponent,
  ) {
    this.recipe = recipeDetailsComponent.recipe;
  }

  ngOnInit(): void {
    this.creator = this.authService.currentUser.username;
    this.selectedCategory = this.recipe.category;
    this.selectedDifficultyLevel = this.recipe.difficultyLevel;
    this.selectedNecesseryTime = this.recipe.necesseryTime;
  }

  submitHandler(data: any): void {
    data.creator = this.creator;
    data.createdAt = new Date().toLocaleDateString()
    data.ingredients = data.ingredients.trim().split(',')
    console.log(data.ingredients)
    console.log(data)
    this.themeService.saveRecipe(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err.message)
        }
      });
  }
}
