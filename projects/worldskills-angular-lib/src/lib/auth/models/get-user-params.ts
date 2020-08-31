export interface GetUsersParams {
  un?: string;
  fn?: string;
  ln?: string;
  sort?: string;
  role?: string;
  app_code?: number;
  role_id?: number;
  offset: number;
  limit: number;
  ws_entity?: number;
  ws_entity_precise?: boolean;
}
