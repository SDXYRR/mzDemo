import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-filmpages',
  templateUrl: './filmpages.component.html',
  styleUrls: ['./filmpages.component.scss']
})
export class FilmpagesComponent implements OnInit {
  @Input() filesData:Array<any>;
  constructor() { }

  ngOnInit() {
  }
  getId(){
    console.log(this.filesData);
  }
}
