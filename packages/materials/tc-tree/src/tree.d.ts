import { VNodeData } from 'vue';

export interface TreeNodeData extends VNodeData {
  children?: TreeNodeData[] | Function;
  collapsible?: boolean;
  content: any;
  disabled?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  indeterminate?: boolean;
  index?: number;
  indexes?: number[];
  isRoot?: boolean;
  loading?: boolean;
  parent?: TreeNodeData;
  raw?: TreeNodeData;
  selectable?: boolean;
  selected?: boolean;
}
