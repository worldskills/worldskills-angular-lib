import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject('NameModel')
export class NameModel {
  @JsonProperty('lang_code',  String)
  langCode: string;

  @JsonProperty('text',  String)
  text: string;

  constructor(obj?: any) {
    this.langCode = obj && obj.langCode || 'en';
    this.text = obj && obj.text || '';
  }
}
