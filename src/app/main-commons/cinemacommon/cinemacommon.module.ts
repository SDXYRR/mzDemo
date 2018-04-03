import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {cinemacommonRoutes} from './cinemacommon.routes';


import { CutcinemaPipe } from '../../cutcinema.pipe';

import {CinemacommonComponent} from './cinemacommon.component';

import {DglassComponent} from './dglass/dglass.component';
import {BusComponent} from './bus/bus.component';
import {ParkComponent} from './park/park.component';
import {SalessComponent} from './saless/saless.component';
import {TicketComponent} from './ticket/ticket.component';
import { SundryComponent } from './sundry/sundry.component';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(cinemacommonRoutes)
  ],
  declarations: [CinemacommonComponent, DglassComponent, 
    BusComponent,ParkComponent, SalessComponent,TicketComponent,
    CutcinemaPipe,
    SundryComponent
  ]

})
export class CinemacommonModule { }
