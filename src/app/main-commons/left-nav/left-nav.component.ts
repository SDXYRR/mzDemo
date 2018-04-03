import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar.service';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
  animations:[
    trigger('changeMy',[
      state('show',style({"transform":"translateX(100%)"})),
      state('hide',style({"transform":"translateX(0%)"})),
      transition('hide=>show',animate(500)),
      transition('show=>hide',animate(100))
    ]),
    trigger('maskChange',[
        state('open',style({"transform":"translateX(0%)",opacity:1,"display":"none"})),
        state('close',style({"transform":"translateX(70%)",opacity:0.3,"display":"block"})),
        transition('open=>close',animate(500)),
        transition('close=>open',animate(100))
    ])
  ]
})
export class LeftNavComponent implements OnInit {
  private myType:Boolean;
  private changeMy:string;
  private maskChange:string;
  constructor(private navbar:NavBarService) { }

  ngOnInit() {
    this.myType = this.navbar.getNavType();
  }
  ngDoCheck(){
    this.myType = this.navbar.getNavType();
    if(this.myType){
      this.changeMy = 'show';
      this.maskChange = 'close';
    }else{
      this.changeMy = 'hide';
      this.maskChange = 'open';
    }
  }
  changNavBar(){
    this.navbar.setNavType();
  }
  
}
