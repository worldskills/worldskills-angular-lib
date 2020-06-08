import { FilterModel } from '../filter-model';

export class GetUsersParams extends FilterModel {
  un: string;
  fn: string;
  ln: string;
  sort: string;
  role: string;
  // tslint:disable-next-line:variable-name
  app_code: number;
  // tslint:disable-next-line:variable-name
  role_id: number;
  offset: number;
  limit: number;
  // tslint:disable-next-line:variable-name
  ws_entity: number;

  constructor(obj?: Partial<GetUsersParams>) {
    super();
    this.un = obj && obj.un || '';
    this.fn = obj && obj.fn || '';
    this.ln = obj && obj.ln || '';
    this.sort = obj && obj.sort || '';
    this.role = obj && obj.role || '';
    this.app_code = obj && obj.app_code || null;
    this.role_id = obj && obj.role_id || null;
    this.offset = obj && obj.offset || null;
    this.limit = obj && obj.limit || null;
    this.ws_entity = obj && obj.ws_entity || null;
  }
}
