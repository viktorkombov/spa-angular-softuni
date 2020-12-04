import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchingToolComponent } from './searching-tool/searching-tool.component';


const routes: Routes = [
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
];

export const AppRoutingModule = RouterModule.forRoot(routes);