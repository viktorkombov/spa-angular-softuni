import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { IRecipe } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  hideNavigation = false;

  get isLogged$(): boolean {
    return this.authService.isLogged$;
  }

  recipeList: IRecipe[];
  isLoading = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private recipeService: RecipeService
  ) { this.recipeService.loadRecipeList().subscribe(recipeList => {
    this.recipeList = recipeList;
  });}
  searchText = '';
  
  navigateToRecipe(recipeId): void {
    console.log(recipeId)
    this.router.navigate(['recipe', 'details', recipeId])
  }

  submitFormHandler(data: any) {
    
  }
  
  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }

  getUserHander(): void {
    this.authService.getCurrentUserProfile().subscribe(() => this.router.navigate(['/user/profile']))
  }

  ngOnDestroy(): void {
  }
}