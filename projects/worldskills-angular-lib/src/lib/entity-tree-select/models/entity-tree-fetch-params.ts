export interface EntityFetchParams {
  limit?: number;
  offset?: number;
  depth?: number;
  member_of?: number;
  name?: string;
  role?: string;
  roleApp?: number;
  sort?: 'name' | 'name_desc';
}
