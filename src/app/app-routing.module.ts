import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent} from './search/search.component';


const routes: Routes = [
    {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home'
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'search/:searchText',
                component: SearchComponent
            },
            {
                path: 'user',
                canActivateChild: [AuthGuard],
                loadChildren: () => import('./user/user.module').then(m => m.UserModule)
            },
            {
                path: '**',
                component: NotFoundComponent
            },
        ]
    },
];


export const AppRoutingModule = RouterModule.forRoot(routes);