import { GetObjectPropertyPipe } from './get-object-property.pipe';

describe('Pipe: GetObjectPropertyPipe', () => {
  let pipe: GetObjectPropertyPipe;
  const sample = { value: ''};

  beforeEach(() => {
    pipe = new GetObjectPropertyPipe();
    sample.value = 'test';
  });

  it('object does not exist', () => {
    const expected = 'sample';
    const result = pipe.transform(null, 'text', 'sample');
    expect(result).toEqual(expected);
  });

  it('Property does not exist', () => {
    const expected = 'sample';
    const result = pipe.transform(sample, 'text', 'sample');
    expect(result).toEqual(expected);
  });

  it('property value is null', () => {
    sample.value = null;
    const expected = 'sample';
    const result = pipe.transform(sample, 'value', 'sample');
    expect(result).toEqual(expected);
  });

  it('property value is not null', () => {
    const expected = 'test';
    const result = pipe.transform(sample, 'value', 'test');
    expect(result).toEqual(expected);
  });
});
