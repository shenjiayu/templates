export interface RawOption {
  children?: RawOption[] | Function | null;
  content?: any;
  disabled?: boolean;
  label?: string;
  value: any;
  [key: string]: any;
}

export interface Option extends RawOption {
  children: any;
  content: any;
  disabled: boolean;
  expandable: boolean;
  expanded: boolean;
  index: number;
  isEnd: boolean;
  isRoot: boolean;
  label: string;
  loadable: boolean;
  loading: boolean;
  parent: Option | null;
  raw: RawOption | null;
  root: Option | null;
  selected: boolean;
  uid: number;
}

export interface FilterOption {
  content: string;
  raw: Option;
}
