import {Pipe, PipeTransform} from '@angular/core';
import { CollectionModel } from '../models/collection-model';

/*
  Get the items list of a collection object.
  best paired with async streams
*/
@Pipe ({
   name : 'wsGetCollectionItems'
})
export class GetCollectionItemsPipe implements PipeTransform {
   transform<TModel>(collection: CollectionModel<TModel>): TModel[] {
     if (collection) {
       return collection.items || [];
     }

     return [];
   }
}
