import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe, IUser } from '../shared/interfaces';
import { RecipeService } from '../recipe/recipe.service'
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-home-',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  slides = [
    {'image': 'https://www.garlicandzest.com/wp-content/uploads/2019/10/thai-squash-soup-3.jpg', 'name': 'Супи и чорби'},
    {'image': 'https://pointcook.org/wp-content/uploads/2019/07/How-to-Barbeque-Myths-About-High-Heat.jpg', 'name': 'Скара'}
]

  topFiveRecipes: IRecipe[]
  @Input() isLoading: boolean;
  public currentUser;
  constructor(private recipeService: RecipeService, private http: HttpClient, public authService: AuthService) {
    this.isLoading = true;
    this.recipeService.loadRecipeList().subscribe((recipeList) => {
    })
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.topFiveRecipes = recipeList.sort((a, b) => {
        if (a.likedBy.length > b.likedBy.length) {
          return -1
        } else if (a.likedBy.length < b.likedBy.length) {
          return 1
        } else {
          return 0
        }
      })
      if (this.topFiveRecipes.length > 5) { this.topFiveRecipes.length = 5}
      this.isLoading = false;
    });
    this.currentUser = this.authService.currentUser;
  
   }

  get isLogged(): boolean {
    return this.authService.isLogged;
  }


  ngOnInit(): void {
    

  }

  ngAfterViewInit(): void {
   
  }
}
