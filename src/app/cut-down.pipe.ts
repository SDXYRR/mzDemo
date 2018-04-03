import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDown'
})
export class CutDownPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!=undefined){
      if(args==10){
        return value.slice(0,9)+'...';
      }else if(args==18){
        return value.slice(0,17)+'...';
      }else if(args==17){
        return value.slice(0,16);
      }
    }
  }

}
