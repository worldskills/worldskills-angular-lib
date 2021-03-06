export interface SelectChangeEvent<T = any, U = any> {
  item: T;
  original: {
    label: string,
    value: U,
    [key: string]: any,
  };
  value: U;
}
