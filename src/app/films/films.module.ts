import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { NowplayComponent } from './nowplay/nowplay.component';
import { CommingComponent } from './comming/comming.component';


import { GetDaysPipe } from '../get-days.pipe';

import { RouterModule } from '@angular/router';
import {filmsRoutes} from './films.routes';
import { CommonfilmsComponent } from './commonfilms/commonfilms.component';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(filmsRoutes)
  ],
  declarations: [FilmsComponent, NowplayComponent, CommingComponent,GetDaysPipe, CommonfilmsComponent],
})
export class FilmsModule { }
