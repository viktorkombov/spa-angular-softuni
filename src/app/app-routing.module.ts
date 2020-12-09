import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { SearchingToolComponent } from './searching-tool/searching-tool.component';


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
                path: 'demo',
                component: SearchComponent
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'search',
                component: SearchingToolComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            },
        ]
    },
];


export const AppRoutingModule = RouterModule.forRoot(routes);