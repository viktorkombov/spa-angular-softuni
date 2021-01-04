import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { IRecipe } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  recipeList: IRecipe[];
  myRecipes: IRecipe[] = [];
  public currentUser;
  constructor(private recipeService: RecipeService, public authService: AuthService) { 
    this.currentUser = this.authService.currentUser;
    console.log(this.currentUser)
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      recipeList.forEach((recipe) => {
        if (recipe.userId._id.toString() === this.currentUser._id.toString()) {
          this.myRecipes.push(recipe)
        }
      })
    });
  }

    

  get isThereRecipes(): boolean {
    console.log(this.myRecipes)
    return this.myRecipes.length > 0 ? true : false;
  }

}