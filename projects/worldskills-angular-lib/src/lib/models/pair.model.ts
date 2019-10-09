export class PairModel {
  name: string;
  value: string;

  constructor(obj?: Partial<PairModel>) {
    this.name = obj && obj.name || '';
    this.value = obj && obj.value || '';
  }
}
