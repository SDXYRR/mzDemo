import { Component, OnInit} from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {HttpService} from '../../../http/http.service';
import { window } from 'rxjs/operator/window';

@Component({
  selector: 'app-sundry',
  templateUrl: './sundry.component.html',
  styleUrls: ['./sundry.component.scss']
})
export class SundryComponent implements OnInit {
  private foodData:Array<any>;
  constructor(private http:HttpService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
      let cinemeId = this.route.params['value']['id'];
      this.http.getItems('http://127.0.0.1:4200/v4/api/cinema/'+cinemeId+'?__t=1522579727909').subscribe(
        res=>{
          this.foodData = res.data.cinema;
          console.log(this.foodData);
        },error=>{
          console.log(error);
        }
      )
  }
  backTo(){
      // this.router.navigateByUrl('cinemacommon');
  }
  buyTo(){
    this.router.navigateByUrl('profile/mpro')
  }
}
