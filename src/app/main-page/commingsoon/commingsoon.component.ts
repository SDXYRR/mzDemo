import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-commingsoon',
  templateUrl: './commingsoon.component.html',
  styleUrls: ['./commingsoon.component.scss']
})
export class CommingsoonComponent implements OnInit {
  @Input() nData:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
