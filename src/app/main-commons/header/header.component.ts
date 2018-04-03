import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar.service';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('rotateC',[
        state('show',style({'display':'block'})),
        state('hide',style({'display':'none'})),
        transition('*=>*',animate(300)),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  private rotateC:string;
  constructor(private navbar:NavBarService,private route:Router) { }

  ngOnInit() {
  }
  changNavBar(){
      this.navbar.setNavType();
  }
  toHome(){
    this.rotateC = 'show';
    this.route.navigateByUrl('profile/mpro');
    setTimeout(() => {
      this.rotateC = 'hide';
    }, 500);
  }
}
