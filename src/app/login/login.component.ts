import { Component, OnInit } from '@angular/core';

import {HttpService} from '../http/http.service';
// import { error } from 'selenium-webdriver';

import {Router} from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	private myName:string;
	private myPass:string;
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit() {

  }
  login(){
	this.http.postData('http://192.168.1.5/data/getMZUser.php',this.myName,this.myPass).subscribe(
		res=>{
			console.log(res);
			if(res==null){
				this.myName = '';
				this.myPass = '';
			}else{
				Cookie.set('loginType',"true");
				Cookie.set('username',res.myName);
				Cookie.set('userid',res.id);
				this.router.navigateByUrl('profile/mpro');
			}
		},
		error=>{
			console.log(error);
		}
	)
  }
}
