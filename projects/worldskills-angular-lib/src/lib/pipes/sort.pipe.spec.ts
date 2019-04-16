import { MenuAccessPipe } from './menu-access.pipe';
import { SortPipe } from './sort.pipe';

describe('Pipe: MenuAccess', () => {
  let pipe: SortPipe;

  const stringData = ['Red', 'Green', 'White', 'Blue'];
  const numberData = [5, 1, 3, 2];
  const dateData = [
    new Date(2019, 5, 1, 10, 5, 0),
    new Date(2019, 4, 7, 8, 0, 0),
    new Date(2019, 9, 2, 5, 0, 0),
    new Date(2019, 4, 7, 7, 0, 0)
  ];
  const objectData = [
    { i: 0, s: 'Red'},
    { i: 1, s: 'Green' },
    { i: 2, s: 'White' },
    { i: 3, s: 'Blue' }
  ];

  beforeEach(() => {
    pipe = new SortPipe();
  });

  it('String Sort Ascending', () => {
    const expected = ['Blue', 'Green', 'Red', 'White'];
    const result = pipe.transform(stringData);
    expect(result).toEqual(expected);
  });

  it('String Sort Descending', () => {
    const expected = ['White', 'Red', 'Green', 'Blue'];
    const result = pipe.transform(stringData, 'desc');
    expect(result).toEqual(expected);
  });

  it('Object String property Sort', () => {
    const expected = [
      { i: 3, s: 'Blue' },
      { i: 1, s: 'Green' },
      { i: 0, s: 'Red'},
      { i: 2, s: 'White' }
    ];
    const result = pipe.transform(objectData, 'asc', 's');
    expect(result).toEqual(expected);
  });

  it('Number Sort Ascending', () => {
    const expected = [1, 2, 3, 5];
    const result = pipe.transform(numberData);
    expect(result).toEqual(expected);
  });

  it('Number Sort Descending', () => {
    const expected = [5, 3, 2, 1];
    const result = pipe.transform(numberData, 'desc');
    expect(result).toEqual(expected);
  });

  it('Object Number property Sort', () => {
    const expected = [
      { i: 0, s: 'Red'},
      { i: 1, s: 'Green' },
      { i: 2, s: 'White' },
      { i: 3, s: 'Blue' }
    ];
    const result = pipe.transform(objectData, 'asc', 'i');
    expect(result).toEqual(expected);
  });

  it('Date Sort Ascending', () => {
    const expected = [
      new Date(2019, 4, 7, 7, 0, 0),
      new Date(2019, 4, 7, 8, 0, 0),
      new Date(2019, 5, 1, 10, 5, 0),
      new Date(2019, 9, 2, 5, 0, 0)
    ];

    const result = pipe.transform(dateData);
    expect(result).toEqual(expected);
  });

  it('Date Sort Descending', () => {
    const expected = [
      new Date(2019, 9, 2, 5, 0, 0),
      new Date(2019, 5, 1, 10, 5, 0),
      new Date(2019, 4, 7, 8, 0, 0),
      new Date(2019, 4, 7, 7, 0, 0),
    ];

    const result = pipe.transform(dateData, 'desc');
    expect(result).toEqual(expected);
  });

});

