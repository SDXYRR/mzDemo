import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(private http: Http) {  

    }
     getItems(url){
          return this.http.get(url).map(res=>res.json())
          .catch((error:any)=>Observable.throw(error || 'Server error'));
      }
	
	  postData(url:string,username:string,password:string){
		  let post = new URLSearchParams();
		  post.append('username',username);
		  post.append('password',password);
		  return this.http.post(url,post).map(res=>res.json())
		  .catch(error=>Observable.throw(error||'server error'));
	  }
}
  
