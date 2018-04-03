import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './main-commons/left-nav/left-nav.component';
import { HeaderComponent } from './main-commons/header/header.component';
import { LoginComponent } from './login/login.component';
import {CommonfilmsComponent} from './main-commons/commonfilms/commonfilms.component';

import { NavBarService } from './nav-bar.service';

import {CinemaModule} from './cinema/cinema.module'
import {MainPageModule} from './main-page/main-page.module'


import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';

import {HttpService} from './http/http.service';
import {AuthService} from './auth.service';
import { CityComponent } from './city/city.component';
import { CinemaPComponent } from './main-commons/commonfilms/cinema-p/cinema-p.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    HeaderComponent,
    LoginComponent,
    CommonfilmsComponent,
    CityComponent,
    CinemaPComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CinemaModule,
    MainPageModule,
  ],
  providers: [NavBarService,HttpService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
