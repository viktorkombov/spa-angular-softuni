import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';

const routes: Routes = [
  {
    path: 'recipe',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'new',
        component: RecipeNewComponent,
        data: {
          title: 'NEW THEME',
          isLogged: true
        }
      },
      {
        path: 'details/:id',
        component: RecipeDetailsComponent,
        data: {
          title: 'NEW THEME',
          isLogged: true
        }
      }
    ]
  }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);