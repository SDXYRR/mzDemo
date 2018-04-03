import { Component, OnInit,Input} from '@angular/core';
import * as swiper from 'Swiper'

@Component({
  selector: 'app-caourse',
  templateUrl: './caourse.component.html',
  styleUrls: ['./caourse.component.scss']
})
export class CaourseComponent implements OnInit {
  @Input() cData:Array<any>;
  constructor() { }

  ngOnInit() {
    window.onload = function(){
      let swiper = new Swiper('.swiper-container',{
        loop:true,
        autoplay:1000,
        observer: true,//异步数据
        observeParents: true
      })
    }
  }

}
