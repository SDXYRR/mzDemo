import { RouterModule } from '@angular/router';

import { FilmsComponent } from './films.component';
import { NowplayComponent } from './nowplay/nowplay.component'
import { CommingComponent } from './comming/comming.component';

export const filmsRoutes = [
    {
        path:'',
        component:FilmsComponent,
        children:[
            {
                path:'nowplay',
                component:NowplayComponent
            },
            {
                path:'comming',
                component:CommingComponent
            },
        ]
    }
]