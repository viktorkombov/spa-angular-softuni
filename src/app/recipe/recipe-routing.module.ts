import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
    {
        path: 'recipe/details',
        component: RecipeDetailsComponent
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent
    // }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);