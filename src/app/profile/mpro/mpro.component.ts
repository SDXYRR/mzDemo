import { Component, OnInit } from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mpro',
  templateUrl: './mpro.component.html',
  styleUrls: ['./mpro.component.scss']
})
export class MproComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    Cookie.deleteAll();
    this.router.navigateByUrl('login');
  }
}
