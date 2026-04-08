export interface TreeSelectNode {
  id: number | string;
  label: string;
  selectable?: boolean;
  children?: TreeSelectNode[];
}
