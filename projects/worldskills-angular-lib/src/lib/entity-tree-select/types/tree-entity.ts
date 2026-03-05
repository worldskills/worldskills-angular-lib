import { EntityTreeView } from "worldskills-ng-auth";

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