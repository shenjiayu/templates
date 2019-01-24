export interface Props {
  currentStep?: number;
  currentStatus?: string;
  finishedStatus?: string;
  pendingStatus?: string;
  tag?: string;
  vertical?: boolean;
}

export interface ItemProps {
  icon?: string;
  sign?: number | String;
  status?: string;
  tag?: string;
  text?: string;
}
