import { RouterModule } from '@angular/router';

import {CinemacommonComponent} from './cinemacommon.component';
import {DglassComponent} from './dglass/dglass.component';
import {BusComponent} from './bus/bus.component';
import {ParkComponent} from './park/park.component';
import {SalessComponent} from './saless/saless.component';
import {TicketComponent} from './ticket/ticket.component';
import { SundryComponent } from './sundry/sundry.component';

export const cinemacommonRoutes = [
    {
        path:'',
        component:CinemacommonComponent,
        children:[
            {
                path:'bus',
                component:BusComponent
            },
            {
                path:'glass',
                component:DglassComponent
            },
            {
                path:'park',
                component:ParkComponent
            },
            {
                path:'saless',
                component:SalessComponent
            },
            {
                path:'ticket',
                component:TicketComponent
            },
        ]
    },
    {
        path:'sundry',
        component:SundryComponent
    }
]