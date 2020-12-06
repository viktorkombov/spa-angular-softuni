import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRecipe, IUser } from '../../shared/interfaces';
import { RecipeService } from '../../recipe/recipe.service'
@Component({
  selector: 'app-home-guests',
  templateUrl: './home-guests.component.html',
  styleUrls: ['./home-guests.component.css']
})
export class HomeGuestsComponent implements OnInit, AfterViewInit {

  recipeList: IRecipe[];
  public result;
  constructor(private recipeService: RecipeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.recipeList = recipeList;
    })
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }
}
