export interface RawItem {
  content: any;
  [key: string]: any;
}

export interface Item {
  active: boolean;
  bottom: boolean;
  content: any;
  left: boolean;
  raw: any;
  right: boolean;
  sliding: boolean;
  toBottom: boolean;
  toLeft: boolean;
  toRight: boolean;
  toTop: boolean;
  top: boolean;
}

export type RawList = RawItem[];
export type List = Item[];
