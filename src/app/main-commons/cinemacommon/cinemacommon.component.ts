import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {HttpService} from '../../http/http.service';
import { error } from 'util';

@Component({
  selector: 'app-cinemacommon',
  templateUrl: './cinemacommon.component.html',
  styleUrls: ['./cinemacommon.component.scss'],
})
export class CinemacommonComponent implements OnInit {
  private cinimaData:Array<any>;
  private foodData:Array<any>;
  constructor(private http:HttpService,private route:ActivatedRoute) { }

  ngOnInit() {
      let cinemeId = this.route.params['value']['id'];
      this.http.getItems('http://127.0.0.1:4200/v4/api/cinema/'+cinemeId+'?__t=1522461983404').subscribe(
        res=>{
          this.cinimaData = res.data.cinema;
        },error=>{  
          console.log(error);
        }
      );
  }

}
