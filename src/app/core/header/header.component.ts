import { Component, OnDestroy, DoCheck, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { IRecipe, IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {

  hideNavigation = false;
  currentUser: IUser;
  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  focus: boolean = false;

  get isFocused(): string {
    if (this.focus === true) {
      return '#9ecaed'
    } else 
    return 'none';
  }
  faSearch = faSearch
  sub: any
  recipeList: IRecipe[];
  klass: string;
  searchText = '';
  scrollTop = 100;
  constructor(
    private authService: AuthService,
    private router: Router,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
  ) {
    this.currentUser = this.authService.currentUser;
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      this.searchText = ''
      this.recipeService.loadRecipeList().subscribe(recipeList => {
        this.recipeList = recipeList;
      });
      return false;
    };
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.recipeList = recipeList;
    });
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.focus = false;
  }

  ngOnChanges() {
    this.klass = this.focus === true ? 'search-class': 'no-class'
  }

  onScroll($event) {
    console.log('kor')
    this.hideNavigation = this.scrollTop < $event.target.scrollTop;
    this.scrollTop = $event.target.scrollTop
  }

  onFocus(): void {
    this.focus = true;
  }

  outOfFocus(): void {
    this.focus = false;
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