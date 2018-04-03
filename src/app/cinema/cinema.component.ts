import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  private cenimaList:Array<any>;
  private addr:Array<any>;
  private type:Boolean = true;
  constructor(private maData:HttpService) { }

  ngOnInit() {
    this.maData.getItems('http://127.0.0.1:4200/v4/api/cinema?__t=1522291239249').subscribe(
      res=>{
        this.cenimaList = res.data.cinemas;
        let newArr = [];
        let k = 0;
        for(let item of this.cenimaList){
           let repeat = false;
           for(let i=0;i<newArr.length;i++){
             if(newArr[i].name==item.district.name){
               repeat = true;
               break;
             }
           }
           if(!repeat){
              newArr.push({"id":k,"name":item.district.name,"content":[],"states":false});
              k++;
           }
           for(var i=0;i<newArr.length;i++){
             if(newArr[i].name==item.district.name){
               newArr[i].content.push(item);

             }
           }
        }
        this.addr = newArr;
        this.addr[0].states = true;
      }
    )
  }
  getItem(i){
      if(this.addr[i].states = this.addr[i].states){
        this.addr[i].states=false;
      }else{
        this.addr[i].states=true;
      }
  }
}