import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('LinkModel')
export class LinkModel {
  @JsonProperty('rel', String)
  rel: string;

  @JsonProperty('href', String)
  href: string;

  @JsonProperty('content_type', String)
  contentType?: string;

  @JsonProperty('description', String)
  description?: string;

  constructor(obj?: any) {
    this.rel = obj && obj.rel || null;
    this.href = obj && obj.href || null;
    this.contentType = obj && obj.contentType || null;
    this.description = obj && obj.description || null;
  }
}

