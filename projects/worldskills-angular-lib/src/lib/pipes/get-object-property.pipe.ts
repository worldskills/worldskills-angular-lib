import {Pipe, PipeTransform} from '@angular/core';

/*
  Get a property of an object or return a default value
  best paired with async streams
*/
@Pipe ({
   name : 'wsGetObjectProperty'
})
export class GetObjectPropertyPipe implements PipeTransform {
   transform(obj: object, prop: string, defaultValue: any): any {
    return obj ? obj[prop] : defaultValue;
   }
}
