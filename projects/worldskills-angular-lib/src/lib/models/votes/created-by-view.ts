export class CreatedByView {
  id: number;
  firstName: string;
  lastName: string;

  constructor(obj?) {
      this.id = obj && obj.id || null;
      this.firstName = obj && obj.firstName || null;
      this.lastName = obj && obj.lastName || null;
  }
}
