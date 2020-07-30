import { ArrayUtil } from './array.util';

describe('Util: array', () => {

  it('dedupe primitive', () => {
    const data = [1, 1, 2, 3, 3, 4, 5, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = ArrayUtil.dedupePrimitive(data);

    expect(result).toEqual(expected);
  });

  it('dedupe primitive not in order', () => {
    const data = [1, 5, 2, 3, 4, 3, 5, 1];
    const expected = [1, 5, 2, 3, 4];
    const result = ArrayUtil.dedupePrimitive(data);

    expect(result).toEqual(expected);
  });

  it('push many', () => {
    const left = [1, 2, 3, 4];
    const right = [5, 6, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7];
    const result = ArrayUtil.pushMany(left, right);

    expect(result).toEqual(expected);
  });

});
