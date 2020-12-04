import { RouterModule, Routes } from '@angular/router';
import { HomeGuestsComponent } from './home-guests/home-guests.component'
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';

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
    {
      path: 'home-for-logged-in',
      component: HomeLoggedInComponent
    }
];

export const HomeRoutingModule = RouterModule.forChild(routes);