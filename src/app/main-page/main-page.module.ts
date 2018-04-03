import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { CaourseComponent } from './caourse/caourse.component';
import { FilmpageComponent } from './commingsoon/filmpage/filmpage.component';
import { FilmpagesComponent } from './nowplaying/filmpages/filmpages.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [MainPageComponent, NowplayingComponent, CommingsoonComponent, CaourseComponent, FilmpageComponent, FilmpagesComponent]
})
export class MainPageModule { }
