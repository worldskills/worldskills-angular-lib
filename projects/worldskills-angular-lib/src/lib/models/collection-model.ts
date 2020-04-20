import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject('CollectionModel')
export class CollectionModel<TModel> {
  @JsonProperty('offset', Number)
  offset: number;

  @JsonProperty('limit', Number)
  limit: number;

  @JsonProperty('items', [Any])
  items: TModel[];

  @JsonProperty('count', Number)
  count: number;

  @JsonProperty('total', Number)
  total: number;

  constructor(obj?: any) {
    this.offset = obj && obj.offset || 0;
    this.limit = obj && obj.limit || 0;
    this.items = obj && obj.items || [];
    this.count = obj && obj.count || 0;
    this.total = obj && obj.total || 0;
  }
}
