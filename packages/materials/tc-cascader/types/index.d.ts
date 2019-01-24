export interface Props {
  clearable?: boolean;
  changeTrigger?: string;
  container?: string | Element;
  data?: any[];
  debounce?: number;
  disabled?: boolean;
  expanded?: boolean;
  expandTrigger?: string;
  filterable?: boolean;
  format?: Function;
  inline?: boolean;
  inputId?: string;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  size?: string;
  value?: any[];
}
