export interface Props {
  animation?: boolean;
  container?: string | Element;
  delay?: number | object;
  disabled?: boolean;
  fallbackPlacement?: string;
  offset?: number;
  placement?: string;
  tag?: string;
  target?: string | Element;
  trigger?: string;
  visible?: boolean;
}

export interface ItemProps {
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  tag?: string;
}
