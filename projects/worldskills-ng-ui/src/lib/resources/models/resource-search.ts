export interface ResourceSearch {
  name?: string;
  tags?: string[];
  ws_entity?: number[];
  type?: number[];
  meta_text?: string;
  meta_type?: number[];
  sort?: string;
  date?: string;
  offset: number;
  limit: number;
}
