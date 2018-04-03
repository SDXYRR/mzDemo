import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private caList:Array<any>;
  private nowList:Array<any>;
  private comList:Array<any>;
  constructor(private maData:HttpService) { }

  ngOnInit() {
    //轮播图数据
    this.maData.getItems('http://127.0.0.1:4200/v4/api/billboard/home?__t=1522220220385').subscribe(
      res =>{
        this.caList = res.data.billboards;
      }
    )

    //正在热映
    this.maData.getItems('http://127.0.0.1:4200/v4/api/film/now-playing?__t=1522239406097&page=1&count=5').subscribe(
      res =>{
        this.nowList = res.data.films;
      }
    )

    //即将上映
    this.maData.getItems('http://127.0.0.1:4200/v4/api/film/coming-soon?__t=1522239406102&page=1&count=3').subscribe(
      res =>{
        this.comList = res.data.films;
      }
    )
  }
  
}
