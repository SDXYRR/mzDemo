import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http/http.service';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-comming',
  templateUrl: './comming.component.html',
  styleUrls: ['./comming.component.scss'],
  animations:[
    trigger('catchMore',[
      state('show',style({"display":"block"})),
      state('hide',style({"display":"none"})),
      transition('*=>*',animate(500))
    ]),
    trigger('buttonM',[
      state('show',style({"display":"block","transform":"translateY(0)"})),
      state('hide',style({"display":"none","transform":"translateY(30px)"})),
      transition('*=>*',animate(500))
    ]),
    trigger('loadingI',[
      state('show',style({"display":"block"})),
      state('hide',style({"display":"none"})),
      transition('*=>*',animate(500))
    ]),
  ]
})
export class CommingComponent implements OnInit {
  private comData:Array<any>;
  private moData:Array<any>;
  private page:number=1;
  private total:number=1;
  private catchMore:string;
  private buttonM:string;
  private loadingI:string;
  constructor(private http:HttpService) { }

  ngOnInit() {
    //获取即将上映数据
    this.http.getItems('http://127.0.0.1:4200/v4/api/film/coming-soon?page=1&count=7').subscribe(
      res =>{
        this.comData = res.data.films;
        this.total = res.data.page.total;
      },
      error => { console.log(error); },
      () => { }
    )
    this.getMorepage();
  }

  ngDoCheck(){
    this.buttonshow();
  }
  getMorepage(){
    window.onscroll = ()=>{

      let scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;
      let count = Math.floor(scrollHeight/50);
      for(let i=2;i<=count;i++){
        if(i>this.page){
          this.moreDate(i);
          this.page++;
        }
      }
    }
  }
  moreDate(i){
    if(i<=this.total){
        this.http.getItems('http://127.0.0.1:4200/v4/api/film/coming-soon?page='+i+'&count=7').subscribe(
          res =>{
            this.moData = res.data.films;
            this.comData.push.apply(this.comData,this.moData);
          },
          error => { console.log(error); },
          () => { }
        )
      if(i==this.total){
        this.catchMore = 'show';
        this.loadingI = 'hide';
      }
    }
  }

  toTop(){
    window.scrollTo(0,0);
  }
  buttonshow(){
    let scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(scrollHeight);
    if(scrollHeight<=50){
      this.buttonM = 'hide';
    }
    if(scrollHeight>=50){
      this.buttonM = 'show';
    }
  }
}
