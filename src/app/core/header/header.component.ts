import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  sub: any
  recipeList: IRecipe[];
  searchText = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      this.searchText = ''
      return false;
    };
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.recipeList = recipeList;
    });
  }




  navigateToRecipe(recipeId: string): void {
    this.router.navigate(['recipe', 'details', recipeId])
  }

  submitFormHandler(searchText: any): void {
    this.router.navigate(['search', searchText])
  }

  logoutHandler(): void {
    this.authService.logout().subscribe(() => this.router.navigate(['/']));
  }

  getUserHander(): void {
    this.authService.getCurrentUserProfile().subscribe(() => this.router.navigate(['/user/profile']))
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}