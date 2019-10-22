import { I18nModel } from '../I18n.model';
import { VersionCreateModel } from '../version-create-model';
import { ResourceModel } from './resource-model';
import { TranslastionCreateModel } from '../translation-create.model';
import { ResourceMetadataUpdateModel } from './resource-metadata-update-model';

export class ResourceUploadModel {
  name: I18nModel;
  // tslint:disable-next-line:variable-name
  ws_entity: number;
  types: number[];
  version: VersionCreateModel;
  metadata: ResourceMetadataUpdateModel[];
  tags: string[];

  constructor(obj?: Partial<ResourceUploadModel>) {
    this.tags = []; // do not create tags
    this.name = obj && obj.name || new I18nModel();
    this.ws_entity = obj && obj.ws_entity;
    this.types = obj && obj.types || [];
    this.version = obj && obj.version || new VersionCreateModel({name: '1.0'});
    this.metadata = obj && obj.metadata || [];
  }

  public static fromResource(resource: ResourceModel) {
    const version = resource.versions[resource.versions.length - 1];
    const translation = version.translations[version.translations.length - 1];
    return new ResourceUploadModel(
      {
        name: resource.name,
        ws_entity: resource.ws_entity.id,
        tags: resource.tags,
        types: resource.resource_types.map(x => x.id),
        metadata: resource.metadata.map(x => new ResourceMetadataUpdateModel({ metadata: x.metadata.id, value: x.value})),
        version: new VersionCreateModel(
          {
            name: version.name,
            date: version.date,
            tags: version.tags,
            translation: new TranslastionCreateModel(
              {
                version: version.id,
                lang_code: translation.lang_code,
                storage_data: translation.storage_data,
                storage_type: translation.storage_type.id
              }
            )
          }
        )
      }
    );
  }
}
