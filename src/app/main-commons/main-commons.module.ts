import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCommonsComponent } from './main-commons.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { CommonfilmsComponent } from './commonfilms/commonfilms.component';
import { CinemacommonComponent } from './cinemacommon/cinemacommon.component';
import { TicketComponent } from './cinemacommon/ticket/ticket.component';
import { DglassComponent } from './cinemacommon/dglass/dglass.component';
import { ParkComponent } from './cinemacommon/park/park.component';
import { SalessComponent } from './cinemacommon/saless/saless.component';
import { BusComponent } from './cinemacommon/bus/bus.component';
import { CinemaPComponent } from './commonfilms/cinema-p/cinema-p.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainCommonsComponent, 
    HeaderComponent, 
    LeftNavComponent, 
    CommonfilmsComponent, 
    CinemacommonComponent, TicketComponent, DglassComponent, ParkComponent, SalessComponent, BusComponent, CinemaPComponent
  ],
})
export class MainCommonsModule { }
