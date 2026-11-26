export interface WsEntityModel {
  id: number;
  name: {
    lang_code: string;
    text: string;
    translations?: Map<string, string>;
  };
}
