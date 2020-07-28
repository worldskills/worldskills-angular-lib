import { EntityTreeView } from '../../auth/models/entity-tree-view';

export type TreeEntity =
  Omit<EntityTreeView, 'children'>
  & {
  parent: TreeEntity,
  children: TreeEntity[],
  fullPathName: string,
  paths: Array<string>,
  allPaths: Array<string>,
  selectable: boolean,
  filtered: boolean,
  type: 'treeEntity'
};
