export interface AppConfig {
  // required: not authorized route
  notAuthorizedRoute: string[];

  // optional: support email address
  supportEmailAddress?: string;
}
