export class WSHttpConfig {
  encoderUriPatterns: string[];
  authUriPatterns: string[];

  constructor(obj?: Partial<WSHttpConfig>) {
    this.encoderUriPatterns = obj && obj.encoderUriPatterns || [];
    this.authUriPatterns = obj && obj.authUriPatterns || [];
  }
}
