import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';

const routes: Routes = [
    {
        path: 'recipe/details',
        component: RecipeDetailsComponent
    },
    {
      path: 'recipe/new',
      component: RecipeNewComponent
    }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);