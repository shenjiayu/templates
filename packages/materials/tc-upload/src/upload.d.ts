import * as Icon from '../../tc-icon';

export interface RawItem {
  attrs?: Object;
  icon?: string | Icon.Props;
  name: string;
  percent?: number;
  status?: string;
  tooltip?: string;
  uid?: number;
  url: string;
}

export interface Item extends RawItem {
  file: File | null;
  icon: string | Icon.Props;
  isNormalized: boolean;
  percent: number;
  raw: RawItem | null;
  response: any;
  status: string;
  uid: number;
  xhr: XMLHttpRequest | null;
}

export type RawList = RawItem[];
export type List = Item[];
