import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {CinemaComponent} from './cinema/cinema.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CommonfilmsComponent} from './main-commons/commonfilms/commonfilms.component';
import {CinemacommonComponent} from './main-commons/cinemacommon/cinemacommon.component';
import { CityComponent } from './city/city.component';
import { CinemaPComponent } from './main-commons/commonfilms/cinema-p/cinema-p.component';


export const appRoutes = [
    {
        path:'',
        redirectTo:'main',
        pathMatch: 'full' 
    },
    {
        path:'main',
        component:MainPageComponent
    },
    {
        path: 'films',
        loadChildren: './films/films.module#FilmsModule'
    },
    {
        path: 'cinema',
        component:CinemaComponent
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'commonfilm/:id',
        component:CommonfilmsComponent
    },
    {
        path: 'cinemacommon/:id',
        loadChildren: './main-commons/cinemacommon/cinemacommon.module#CinemacommonModule'
    },
    {
        path: 'city',
        component:CityComponent
    },
    
    {
        path: 'commonfilm/:id/cinemaP',
        component:CinemaPComponent
    }
]