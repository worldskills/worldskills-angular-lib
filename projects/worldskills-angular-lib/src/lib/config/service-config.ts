export class ServiceConfig {
  public appCode: number;
  public userServiceEndpoint: string;
  public resourceApiPath: string;

  constructor(obj?: Partial<ServiceConfig>) {
    this.appCode = obj && obj.appCode || 0;
    this.userServiceEndpoint = obj && obj.userServiceEndpoint || '';
    this.resourceApiPath = obj && obj.resourceApiPath || '';
  }
}
