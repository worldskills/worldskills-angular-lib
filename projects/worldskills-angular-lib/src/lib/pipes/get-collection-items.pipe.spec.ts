import { GetCollectionItemsPipe } from './get-collection-items.pipe';
import { CollectionModel } from '../models/collection-model';
import { UserModel } from '../models/user.model';

describe('Pipe: GetCollectionItemsPipe', () => {
  let pipe: GetCollectionItemsPipe;
  let sample = new CollectionModel<UserModel>();

  beforeEach(() => {
    pipe = new GetCollectionItemsPipe();
    sample = new CollectionModel<UserModel>();
    sample.count = 1;
    sample.limit = 1;
    sample.total = 1;
    sample.offset = 0;
    sample.items.push(new UserModel());
    sample.items[0].firstName = 'John';
    sample.items[0].lastName = 'Doe';
  });

  it('collection is null', () => {
    const expected = [];
    const result = pipe.transform(null);
    expect(result).toEqual(expected);
  });

  it('collection.items is null', () => {
    sample.items = null;
    const expected = [];
    const result = pipe.transform(sample);
    expect(result).toEqual(expected);
  });

  it('collection.items is not null', () => {
    const expected = 'John';
    const result = pipe.transform(sample);
    expect(result[0].firstName).toEqual(expected);
  });
});
