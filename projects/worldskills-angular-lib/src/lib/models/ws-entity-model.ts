import { JsonObject, JsonProperty } from 'json2typescript';
import { NameModel } from './name-model';

@JsonObject(WsEntityModel)
export class WsEntityModel {
  @JsonProperty('id',  Number)
  id: number;

  @JsonProperty('name',  NameModel)
  name: NameModel;

  constructor(obj?: any) {
    this.id = obj && obj.id || 0;
    this.name = obj && obj.name || new NameModel();
  }
}
