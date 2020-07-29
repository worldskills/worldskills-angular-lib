export interface ResourceSearch {
  tags?: string[];
  name?: string;
  ws_entity?: number[];
  type?: number[];
  sort?: string;
  date?: string;
  meta_text?: string;
  meta_type?: number[];
  offset: number;
  limit: number;
}
