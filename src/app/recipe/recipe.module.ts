import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from './recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemForSearchComponent } from './recipe-item-for-search/recipe-item-for-search.component';
import { RecipeCategoryComponent } from './recipe-category/recipe-category.component';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';



@NgModule({
  declarations: [RecipeDetailsComponent, RecipeNewComponent, RecipeItemComponent, RecipeEditComponent, RecipeItemForSearchComponent, RecipeCategoryComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    RecipeService
  ],
  exports: [
    RecipeItemComponent,
    RecipeItemForSearchComponent
  ]
})
export class RecipeModule { }
