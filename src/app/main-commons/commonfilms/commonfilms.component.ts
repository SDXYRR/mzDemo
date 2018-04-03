import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {HttpService} from '../../http/http.service';
import { error } from 'util';

@Component({
  selector: 'app-commonfilms',
  templateUrl: './commonfilms.component.html',
  styleUrls: ['./commonfilms.component.scss']
})
export class CommonfilmsComponent implements OnInit {
  private filmData:Array<any>;
  constructor(private http:HttpService,private routes:ActivatedRoute) { }

  ngOnInit() {

    let filmId = this.routes.params['value']['id'];
    this.http.getItems('http://127.0.0.1:4200/v4/api/film/'+filmId+'?__t=1522411579113').subscribe(
      res=>{
        this.filmData = res.data.film;
        console.log(this.filmData);
      },error=>{
        console.log(error);
      }
    )
  }

}
