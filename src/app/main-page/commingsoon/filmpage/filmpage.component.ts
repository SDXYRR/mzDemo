import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-filmpage',
  templateUrl: './filmpage.component.html',
  styleUrls: ['./filmpage.component.scss']
})
export class FilmpageComponent implements OnInit {
  @Input() cmLs:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
