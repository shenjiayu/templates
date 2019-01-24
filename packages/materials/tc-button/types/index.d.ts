import * as Icon from '../../tc-icon';

export interface Props {
  block?: boolean;
  disabled?: boolean;
  icon?: string | Icon.Props | Array<string | Icon.Props>;
  loading?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: string;
  tag?: string;
  type?: string;
}

export interface GroupProps {
  size?: string;
  tag?: string;
  vertical?: boolean;
}
