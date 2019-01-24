export interface Props {
  block?: boolean;
  color?: string | Function;
  disabled?: boolean;
  icon?: string | Function;
  max?: number;
  min?: number;
  name?: string;
  readonly?: boolean;
  size?: number | string;
  step?: number;
  tag?: number;
  tooltip?: boolean | Function;
  value?: number;
}
