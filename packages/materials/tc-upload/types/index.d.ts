export interface Props {
  accept?: string;
  auth?: {
    username: string;
    password: string;
  };
  autoUpload?: boolean;
  beforeUpload?: Function;
  capture?: boolean;
  concurrency?: number;
  data?: object | Function;
  disabled?: boolean;
  headers?: object;
  listType?: string;
  multiple?: boolean;
  method?: string;
  name?: string;
  onComplete?: Function;
  onEnd?: Function;
  onError?: Function;
  onPreview?: Function;
  onProgress?: Function;
  onRemove?: Function;
  onStart?: Function;
  onSuccess?: Function;
  onUpload?: Function;
  removable?: boolean;
  responseType?: string;
  tag?: string;
  timeout?: number;
  url: string;
  value?: any[];
  withCredentials?: boolean;
  xhr?: Function;
}
