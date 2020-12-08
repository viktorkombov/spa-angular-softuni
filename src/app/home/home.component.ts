import { AfterViewInit, Component, OnInit } from '@angular/core';
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

  
  recipeList: IRecipe[];
  public currentUser;
  constructor(private recipeService: RecipeService, private http: HttpClient, public authService: AuthService) { }

  get isLogged$(): boolean {
    return this.authService.isLogged$;
  }


  ngOnInit(): void {
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.recipeList = recipeList;
    });
    this.currentUser = this.authService.currentUser;
  }

  ngAfterViewInit(): void {
   
  }
}
