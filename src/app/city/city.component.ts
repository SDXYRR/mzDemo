import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';
import { error } from 'util';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  private cityList:Array<any>;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getItems('http://127.0.0.1:4200/v4/api/city?__t=1522649162119').subscribe(
      res=>{
        this.cityList = res.data.cities;
        console.log(this.cityList);
        let newArr = [];
        for(let c of this.cityList){
          // if(c.pinyin.indexOf("a")==-1){
          //     console.log(c);
          // }
        }
      },error=>{
        console.log(error);
      }
    )
  }

}
