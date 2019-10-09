export class LinkModelRaw {
  rel: string;
  href: string;
  contentType?: string;
  description?: string;
  constructor(obj?: any) {
    this.rel = obj && obj.rel || '';
    this.href = obj && obj.ref || '';
    this.contentType = obj && obj.contentType || null;
    this.description = obj && obj.description || null;
  }
}
