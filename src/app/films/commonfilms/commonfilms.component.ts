import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-commonfilms',
  templateUrl: './commonfilms.component.html',
  styleUrls: ['./commonfilms.component.scss']
})
export class CommonfilmsComponent implements OnInit {
  @Input() item:Array<any>;
  @Input() type:string;
  constructor() { }

  ngOnInit() {
  }

}
