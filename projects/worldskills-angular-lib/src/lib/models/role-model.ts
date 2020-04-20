import { RoleApplicationModel } from './role-application-model';
import { JsonObject, JsonProperty, Any } from 'json2typescript';
import { WsEntityModel } from './ws-entity-model';
import { NameModel } from './name-model';

@JsonObject('RoleModel')
export class RoleModel {
  @JsonProperty('id', Number)
  id: number;

  @JsonProperty('role_application_id', Number)
  roleApplicationId: number;

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('description', String)
  description: string;

  @JsonProperty('apply_per_entity', Boolean)
  applyPerEntity: false;

  @JsonProperty('ws_entity', WsEntityModel)
  wsEntity: WsEntityModel;

  @JsonProperty('role_application', RoleApplicationModel)
  roleApplication: RoleApplicationModel;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || 0;
    this.roleApplicationId = obj && Number(obj.roleApplicationId) || 0;
    this.name = obj && obj.name || new NameModel();
    this.description = obj && obj.description || null;
    this.applyPerEntity = obj && obj.applyPerEntity || false;
    this.wsEntity = obj && obj.wsEntity || new WsEntityModel();
    this.roleApplication = obj && obj.roleApplication || new RoleApplicationModel();
  }
}
