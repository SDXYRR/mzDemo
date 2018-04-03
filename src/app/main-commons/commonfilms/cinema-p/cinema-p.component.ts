import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {HttpService} from '../../../http/http.service';
import { error } from 'util';

@Component({
  selector: 'app-cinema-p',
  templateUrl: './cinema-p.component.html',
  styleUrls: ['./cinema-p.component.scss']
})
export class CinemaPComponent implements OnInit {
  private priceData:Array<any>;
  constructor(private http:HttpService,private routes:ActivatedRoute) { }

  ngOnInit() {
    let filmId = this.routes.params['value']['id'];
    this.http.getItems('http://127.0.0.1:4200/v4/api/film/'+filmId+'/cinema?__t=1522661958949').subscribe(
      res=>{
        this.priceData = res.data.cinemas;
        let newArr = [];
        let k = 0;
        console.log(this.priceData);
        for(let pc of this.priceData){
          //默认不重复;
           let repeat = false;
           for(let i=0;i<newArr.length;i++){
              if(pc.district.name==newArr[i].name){
                //重复了
                  repeat = true;
                  break;
              }
           }
           if(!repeat){
             newArr.push({"id":k,"name":pc.district.name,"type":false,"content":[]});
           }

           for(let i=0;i<newArr.length;i++){
             if(pc.district.name==newArr[i].name){
               newArr[i].content.push(pc);
             }
           }
        }
        console.log(newArr);
      },error=>{
        console.log(error);
      }
    )
  }

}
