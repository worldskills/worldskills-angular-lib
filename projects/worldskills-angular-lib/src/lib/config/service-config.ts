export class ServiceConfig {
  public appCode: number;
  public apiEndpoint: string;

  constructor(obj?: Partial<ServiceConfig>) {
    this.appCode = obj && obj.appCode || 0;
    this.apiEndpoint = obj && obj.apiEndpoint || '';
  }
}
