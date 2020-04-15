export class EntityPathItemView {
  id: number;
  text: string;
  hasChildren: boolean;

  constructor(obj?) {
      this.id = obj && obj.id || null;
      this.text = obj && obj.text || null;
      this.hasChildren = obj && obj.hasChildren || false;
  }
}
