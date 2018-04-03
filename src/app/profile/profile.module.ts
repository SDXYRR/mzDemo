import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MproComponent } from './mpro/mpro.component';

import {RouterModule} from '@angular/router';
import {profileRoutes} from './profile.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(profileRoutes)
  ],
  declarations: [ProfileComponent, MproComponent]
})
export class ProfileModule { }
