import { VNodeData } from 'vue';

export interface TableSectionData extends VNodeData {
  index?: any;
  rows: any[];
  tag?: string;
}

export interface TableRowData extends VNodeData {
  cells: any[];
  disabled?: boolean;
  indeterminate?: boolean;
  index?: any;
  raw?: any[] | object;
  selected?: boolean;
  tag?: string;
}

export interface TableCellData extends VNodeData {
  colSpan?: number;
  content: any;
  headers?: string;
  index?: any;
  rowSpan?: number;
  scope?: string;
  sortType?: number;
  sortable?: boolean;
  tag?: string;
}

export interface TableColgroupData extends VNodeData {
  span?: number;
}
