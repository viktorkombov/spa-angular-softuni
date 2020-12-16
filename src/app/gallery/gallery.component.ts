import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { RecipeService } from '../recipe/recipe.service';
import { IRecipe } from '../shared/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  slides: IRecipe[]

  constructor(private recipeService: RecipeService) {
    this.recipeService.loadRecipeList().subscribe((recipeList) => {
      this.slides = recipeList;
    })
   }


}
