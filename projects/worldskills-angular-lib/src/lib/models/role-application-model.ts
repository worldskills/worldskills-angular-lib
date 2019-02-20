import { LinkModel } from './link-model';
import { JsonObject, JsonProperty } from 'json2typescript';
import { NameModel } from './name-model';

@JsonObject(RoleApplicationModel)
export class RoleApplicationModel {
  @JsonProperty('id', Number)
  id: number;

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('application_code', Number)
  applicationCode: number;

  @JsonProperty('links', [LinkModel])
  links: LinkModel[];

  @JsonProperty('manages_own_roles', Boolean)
  ManagesOwnRoles: boolean;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || 0;
    this.applicationCode = obj && Number(obj.applicationCode) || 0;
    this.name = obj && obj.name || new NameModel();
    this.links = obj && obj.links || [];
    this.ManagesOwnRoles = obj && obj.ManagesOwnRoles || false;
  }
}
