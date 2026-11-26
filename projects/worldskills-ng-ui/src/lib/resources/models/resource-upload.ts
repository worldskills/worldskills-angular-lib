import { I18nText } from '../../common/models/i18n-text';
import { Resource } from './resource';
import { VersionCreate } from './version-create';
import { ResourceMetadataUpdate } from './resource-metadata-update';

export class ResourceUpload {
  name: I18nText;
  ws_entity: number;
  types: number[];
  version: VersionCreate;
  metadata: ResourceMetadataUpdate[];
  tags: string[];

  constructor(obj?: Partial<ResourceUpload>) {
    this.tags = [];
    this.name = obj?.name ?? { lang_code: 'en', text: null };
    this.ws_entity = obj?.ws_entity ?? null;
    this.types = obj?.types ?? [];
    this.version = obj?.version ?? { name: '1.0' };
    this.metadata = obj?.metadata ?? [];
  }

  static fromResource(resource: Resource): ResourceUpload {
    const version = resource.versions[resource.versions.length - 1];
    const translation = version.translations[version.translations.length - 1];
    return new ResourceUpload({
      name: resource.name,
      ws_entity: resource.ws_entity.id,
      tags: resource.tags,
      types: resource.resource_types.map(t => t.id),
      metadata: resource.metadata.map(m => ({ metadata: m.metadata.id, value: m.value })),
      version: {
        name: version.name,
        date: version.date,
        tags: version.tags,
        translation: {
          version: version.id,
          lang_code: translation.lang_code,
          storage_data: translation.storage_data,
          storage_type: translation.storage_type.id,
        },
      },
    });
  }
}
