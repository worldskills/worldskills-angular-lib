export class AppConfig {
  public notAuthorizedRoute: string[];

  constructor(obj?: Partial<AppConfig>) {
    this.notAuthorizedRoute = obj && obj.notAuthorizedRoute || ['/not-authorized'];
  }
}
