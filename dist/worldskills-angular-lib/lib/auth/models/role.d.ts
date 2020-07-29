import { WsEntityModel } from './ws-entity';
import { RoleApplicationModel } from './role-application';
export interface Role {
    id: number;
    role_application_id: number;
    name: string;
    description: string;
    apply_per_entity: boolean;
    ws_entity: WsEntityModel;
    role_application: RoleApplicationModel;
}
