import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutcinema'
})
export class CutcinemaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!=undefined){
      if(args==17){
      return value.slice(0,16);
    }
  }
  }

}
