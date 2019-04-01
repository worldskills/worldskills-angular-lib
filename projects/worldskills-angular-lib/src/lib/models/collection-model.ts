import { JsonObject, JsonProperty, Any } from 'json2typescript';

@JsonObject(CollectionModel)
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
}
