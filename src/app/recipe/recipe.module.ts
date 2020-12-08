import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeService } from './recipe.service';
import { FormsModule } from '@angular/forms';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [RecipeDetailsComponent, RecipeNewComponent, RecipeItemComponent, RecipeEditComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    RecipeService
  ],
  exports: [
    RecipeItemComponent
  ]
})
export class RecipeModule { }
