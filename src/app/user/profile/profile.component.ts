import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { IRecipe } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  recipeList: IRecipe[];
  public currentUser;
  constructor(private recipeService: RecipeService, public authService: AuthService) { }

  ngOnInit(): void {
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.recipeList = recipeList;
    });
    this.currentUser = this.authService.currentUser;
  }

}
