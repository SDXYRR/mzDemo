import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDays'
})
export class GetDaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!=undefined){
      let myDate = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
      let nowDay = new Date(value);
      let week = myDate[nowDay.getDay()];
      return week;
    }
  }

}
