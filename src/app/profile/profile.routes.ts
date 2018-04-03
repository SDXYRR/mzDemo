import {RouterModule} from '@angular/router';
import {AuthService} from '../auth.service';
import {ProfileComponent} from './profile.component';
import {MproComponent} from './mpro/mpro.component';

export const profileRoutes = [
    {
        path:'',
        component:ProfileComponent,
        // canActivate:[AuthService],
        children:[
            {
                path:'mpro',
                component:MproComponent
            }
        ]
    }
]