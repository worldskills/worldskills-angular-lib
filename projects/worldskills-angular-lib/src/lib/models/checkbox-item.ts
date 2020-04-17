export class CheckBoxItem {
  value: any;
  selected: boolean;
  data: any;

  constructor(obj?: Partial<CheckBoxItem>) {
    this.value = obj && obj.value || null;
    this.selected = obj && obj.selected || false;
    this.data = obj && obj.data || null;
  }
}
