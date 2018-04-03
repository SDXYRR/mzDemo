import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {
  @Input() mData:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
