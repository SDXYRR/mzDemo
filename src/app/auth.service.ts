import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService implements CanActivate{

  constructor(private router:Router) { }
  canActivate():boolean{
		if(Cookie.get('loginType')){
			return true;
		}else{
			this.router.navigateByUrl('login');
		}
  	
}
}
