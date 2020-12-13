import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
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
          title: 'Нова рецепта',
          isLogged: true
        }
      },
      {
        path: 'details/:id',
        component: RecipeDetailsComponent
      },
      {
        path: 'edit/:id',
        component: RecipeEditComponent,
        data: {
          title: 'Редактирай рецептата',
          isLogged: true
        }
      }
    ]
  }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);