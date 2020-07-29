import { I18nText } from '../../common/models/i18n-text';
import { Resource } from './resource';
import { VersionCreate } from './version-create';
import { ResourceMetadataUpdate } from './resource-metadata-update';
export declare class ResourceUpload {
    name: I18nText;
    ws_entity: number;
    types: number[];
    version: VersionCreate;
    metadata: ResourceMetadataUpdate[];
    tags: string[];
    constructor(obj?: Partial<ResourceUpload>);
    static fromResource(resource: Resource): ResourceUpload;
}
