export class APIError {
  code: string;
  // tslint:disable-next-line:variable-name
  user_msg: string;
  // tslint:disable-next-line:variable-name
  dev_msg: string;
  errors: any;

  constructor(obj?) {
    this.code = obj && obj.code || null;
    this.user_msg = obj && obj.user_msg || null;
    this.dev_msg = obj && obj.dev_msg || null;
    this.errors = obj && obj.errors || null;
  }
}
