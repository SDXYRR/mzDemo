import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {
  private type:Boolean=false;
  constructor() { }
  setNavType(){
    this.type = ! this.type;
  }
  getNavType(){
    return this.type;
  }
}
