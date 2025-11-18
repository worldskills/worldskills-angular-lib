import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
    name: 'wsSort',
    standalone: false
})
export class SortPipe implements PipeTransform {
   transform(items, direction?, property?): any[] {
     // default direction ascending
     direction = direction === null || direction === undefined ? 'asc' : direction;

     return items.sort((a, b) => {
       // handle arrays or objects
       const left = property === null || property === undefined ? a : a[property];
       const right = property === null || property === undefined ? b : b[property];

       // if equal weighting is the same
       if (left === right) {
         return 0;
       }

       // handle ascending and descening sorts
       if (direction === 'desc') {
         return left < right ? 1 : -1;
       } else {
         return left < right ? -1 : 1;
       }
    });
   }
}
