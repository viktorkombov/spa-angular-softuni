import { RouterModule, Routes } from '@angular/router';
import { HomeGuestsComponent } from './home-guests/home-guests.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeGuestsComponent
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent
    // }
];

export const HomeRoutingModule = RouterModule.forChild(routes);