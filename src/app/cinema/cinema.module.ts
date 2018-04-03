import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaComponent } from './cinema.component';
import { CutDownPipe } from '../cut-down.pipe';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [CinemaComponent,CutDownPipe],
})
export class CinemaModule { }
