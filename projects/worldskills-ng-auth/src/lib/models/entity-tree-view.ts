
export class EntityTreeView {
  id: number;
  name: {
      lang_code: string;
      text: string;
      translations?: Map<string, string>;
  };
  // tslint:disable-next-line:variable-name
  parent_id: number;
  children: Array<EntityTreeView>;

  constructor(obj?: any) {
    this.id = obj && obj.id || undefined;
    this.name = obj && obj.name || { lang_code: 'en', text: null };
    this.parent_id = obj && obj.parent_id || undefined;
    this.children = obj && obj.children || [];
  }
}


