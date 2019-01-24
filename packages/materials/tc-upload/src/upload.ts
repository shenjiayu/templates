import * as utils from '../../tc-utils/src';
import { CreateElement, VNode } from 'vue';
import * as Upload from './upload.d';

const LIST_TYPES = ['none', 'text', 'picture', 'picture-card'];
const STATUS_ICONS: any = {
  wait: 'clock',
  process: 'loader',
  success: 'check',
  error: 'x',
};
const PROGRESS_STATUSES: any = {
  wait: '',
  process: '',
  success: 'success',
  error: 'danger',
};

export default {
  name: 'tc-upload',

  model: {
    event: 'change',
  },

  data() {
    return {
      list: [],
    };
  },

  props: {
    accept: String,
    auth: Object,

    autoUpload: {
      type: Boolean,
      default: true,
    },

    beforeUpload: {
      type: Function,
      default: () => {},
    },

    capture: Boolean,

    concurrency: {
      type: Number,
      default: 1,
    },

    data: [Object, Function],
    disabled: Boolean,
    headers: Object,

    listType: {
      type: String,
      default: LIST_TYPES[1],
    },

    multiple: Boolean,

    method: {
      type: String,
      default: 'post',
    },

    name: {
      type: String,
      default: 'file',
    },

    onComplete: {
      type: Function,
      default: () => {},
    },

    onEnd: {
      type: Function,
      default: () => {},
    },

    onError: {
      type: Function,
      default: () => {},
    },

    onPreview: {
      type: Function,
      default: () => {},
    },

    onProgress: {
      type: Function,
      default: () => {},
    },

    onRemove: {
      type: Function,
      default: () => {},
    },

    onStart: {
      type: Function,
      default: () => {},
    },

    onSuccess: {
      type: Function,
      default: () => {},
    },

    onUpload: {
      type: Function,
      default: () => {},
    },

    removable: {
      type: Boolean,
      default: true,
    },

    responseType: {
      type: String,
      default: 'json',
    },

    tag: {
      type: String,
      default: 'div',
    },

    timeout: {
      type: Number,
      default: 0,
    },

    url: {
      type: String,
      required: true,
    },

    value: Array,

    withCredentials: {
      type: Boolean,
      default: false,
    },

    xhr: {
      type: Function,
      default: () => new XMLHttpRequest(),
    },
  },

  render(createElement: CreateElement): VNode {
    const { listType } = this;

    return createElement(
      this.tag,

      {
        class: {
          'tc-upload': true,
          'tc-upload--disabled': this.disabled,
          [`tc-upload--${listType}`]: listType,
        },

        on: this.$listeners,
      },

      [
        createElement(
          'input',

          {
            attrs: {
              accept: this.accept,
              capture: this.capture,
              disabled: this.disabled,
              multiple: this.multiple,
              name: this.name,
              type: 'file',
            },

            class: 'tc-upload__input',

            on: {
              change: this.onChange,
            },

            ref: 'input',
          },
        ),

        listType === LIST_TYPES[3] ? '' : createElement(
          'div',

          {
            class: 'tc-upload__zone',

            on: {
              click: this.onClick,
              drop: this.onDrop,
              dragover: this.onDragOver,
            },
          },

          this.$slots.default,
        ),

        !utils.includes(listType, LIST_TYPES.slice(1)) || utils.isEmptyArray(this.list) ? [
        ] : createElement(
          'transition-group',

          {
            class: 'tc-upload__list',

            props: {
              name: 'tc-transition--fade',
              tag: 'ul',
            },
          },

          [
            this.list.map((item: Upload.Item, index: number) => createElement(
              'li',

              {
                class: {
                  'tc-upload__item': true,
                  'tc-upload__item--status': item.status,
                  [`tc-upload__item--${item.status}`]: item.status,
                },

                key: item.uid,
              },

              [
                createElement(
                  'a',

                  {
                    attrs: item.attrs,
                    class: 'tc-upload__content',
                    on: listType !== LIST_TYPES[3] ? {
                      click: (event: Event) => {
                        this.preview(event, item, index);
                      },
                    } : {},
                  },

                  [
                    createElement(
                      'span',

                      {
                        class: 'tc-upload__header',
                      },

                      [
                        listType === LIST_TYPES[1] ? createElement(
                          'tc-icon',

                          {
                            class: 'tc-upload__icon',
                            props: utils.isString(item.icon) ? {
                              type: item.icon,
                            } : item.icon,
                          },
                        ) : createElement(
                          'img',

                          {
                            attrs: {
                              alt: item.name,
                              src: item.url,
                            },

                            class: 'tc-upload__image',
                          },
                        ),
                      ],
                    ),

                    createElement(
                      'span',

                      {
                        class: 'tc-upload__body',
                      },

                      [createElement(utils.createComponent(item.name))],
                    ),

                    createElement(
                      'span',

                      {
                        class: 'tc-upload__footer',
                      },

                      [
                        STATUS_ICONS[item.status] ? createElement(
                          'tc-icon',

                          {
                            class: 'tc-upload__icon',

                            props: {
                              animation: item.status === 'process' ? 'rotation' : '',
                              type: STATUS_ICONS[item.status],
                            },
                          },
                        ) : '',
                      ],
                    ),

                    item.tooltip ? createElement(
                      'tc-tooltip',

                      {
                        props: {
                          content: item.tooltip,
                        },
                      },
                    ) : '',
                  ],
                ),

                item.status === 'process' ? createElement(
                  'tc-progress',

                  {
                    class: 'tc-upload__progress',
                    props: {
                      type: PROGRESS_STATUSES[item.status],
                      value: item.percent,
                    },
                  },
                ) : '',

                this.removable ? createElement(
                  'span',

                  {
                    attrs: {
                      role: 'button',
                    },

                    class: 'tc-upload__remove',

                    on: {
                      click: (event: Event) => {
                        this.remove(event, item, index);
                      },
                    },
                  },

                  [
                    this.removable ? createElement(
                      'tc-icon',

                      {
                        class: 'tc-upload__icon',

                        props: {
                          type: 'x',
                        },
                      },
                    ) : '',
                  ],
                ) : '',
              ],
            )),

            listType === LIST_TYPES[3] ? createElement(
              'li',

              {
                class: 'tc-upload__item tc-upload__item--zone',
                key: -1,

                on: {
                  click: this.onClick,
                  drop: this.onDrop,
                  dragover: this.onDragOver,
                },
              },

              this.$slots.default,
            ) : '',
          ],
        ),
      ],
    );
  },

  methods: {
    init() {
      this.oldList = [...this.list];
      this.list = this.normalize(this.value);
    },

    onClick() {
      if (!this.disabled) {
        this.$refs.input.click();
      }
    },

    onDrop(e: DragEvent) {
      if (!this.disabled) {
        e.preventDefault();
        this.choose(e.dataTransfer.files);
      }
    },

    onDragOver(e: Event) {
      if (!this.disabled) {
        e.preventDefault();
      }
    },

    onChange(e: any) {
      e.stopPropagation();
      this.choose(e.target.files);
      e.target.value = '';
    },

    choose(files: FileList) {
      if (this.disabled) {
        return;
      }

      const list: Upload.List = this.normalize(utils.from(files, (file: File) => ({
        file,
        name: file.name,
      })), true);

      if (utils.includes(this.listType, LIST_TYPES.slice(1))) {
        list.forEach((item: Upload.Item) => {
          this.create(item.file, (url: string) => {
            if (!item.url) {
              item.url = url;
            }
          });
        });
      }

      this.list = this.list.concat(list);

      if (this.autoUpload) {
        this.start();
      } else {
        this.update();
      }
    },

    create(file: File, done: Function = () => {}) {
      if (URL) {
        done(URL.createObjectURL(file));
      } else if (FileReader) {
        const reader = new FileReader();

        reader.onload = () => {
          done(reader.result);
        };

        reader.readAsDataURL(file);
      }
    },

    update() {
      const { oldList = [] } = this;

      this.oldList = [...this.list];
      this.$emit('change', this.list, oldList);
    },

    normalize(rawList: Upload.List = [], changed: boolean = false) {
      return rawList.map((rawItem: Upload.Item) => {
        if (rawItem.isNormalized) {
          return rawItem;
        }

        const name = rawItem.name || '';

        return utils.assign({
          name,
          file: null,
          icon: 'file',
          percent: 0,
          raw: null,
          status: '',
          tooltip: '',
          uid: utils.uid(),
          xhr: null,
        }, rawItem, changed ? {
          status: 'wait',
        } : {
          attrs: rawItem.url ? {
            href: rawItem.url,
          } : {},
          raw: rawItem,
          status: rawItem.status,
        }, {
          isNormalized: true,
        });
      });
    },

    start() {
      if (this.disabled || this.uploading || this.onStart(this.list) === false) {
        return;
      }

      this.count = 0;
      this.index = -1;
      this.uploading = true;
      this.next();
    },

    next() {
      const index = this.index + 1;

      if (this.uploading && index < this.list.length) {
        if (this.count < this.concurrency) {
          this.count += 1;
          this.index = index;
          this.upload(this.list[index], () => {
            this.count -= 1;
            this.next();
          });
          this.next();
        }
      } else {
        this.stop();
      }
    },

    stop() {
      this.uploading = false;
      this.onEnd(this.list);
    },

    abort(target?: Upload.Item) {
      if (target) {
        if (target.xhr && target.xhr.readyState < 4) {
          target.xhr.abort();
        }

        return;
      }

      this.list.forEach((item: Upload.Item) => {
        if (item.xhr && item.xhr.readyState < 4) {
          item.xhr.abort();
        }
      });
    },

    upload(item: Upload.Item, done: Function = () => {}) {
      const { list } = this;
      const { file } = item;

      if (!file || item.status !== 'wait' || this.beforeUpload(item, list) === false) {
        done();
        return;
      }

      const xhr = this.xhr(item, list);

      if (xhr.readyState > 0) {
        done();
        return;
      }

      xhr.addEventListener('loadstart', () => {
        item.status = 'process';
        this.onUpload(item, list);
        this.update();
      });

      item.xhr = xhr;

      if (xhr.upload) {
        xhr.upload.onprogress = (event: ProgressEvent) => {
          if (event.lengthComputable) {
            item.percent = event.loaded / event.total;
          }

          this.onProgress(event, item, list);
          this.update();
        };
      }

      xhr.addEventListener('load', () => {
        item.status = 'success';
        item.response = (() => {
          let { response } = xhr;

          switch (this.responseType) {
            case 'json':
              try {
                return JSON.parse(response);
              } catch (error) {
                return response;
              }

            case 'text':
              response = xhr.responseText || response;
              break;

            case 'xml':
              response = xhr.responseXML || response;
              break;

            default:
          }

          return response;
        })();

        this.onSuccess(item.response, item, list);
        this.update();
      });

      const error = (event: ProgressEvent) => {
        item.status = 'error';
        item.response = xhr.response;
        this.onError(event.type, item, list);
        this.update();
      };

      xhr.addEventListener('timeout', error);
      xhr.addEventListener('abort', error);
      xhr.addEventListener('error', error);
      xhr.addEventListener('loadend', () => {
        item.file = null;
        this.onComplete(item, list);
        this.update();
        done();
      });
      xhr.open(this.method, this.url);
      utils.forEach(utils.assign({
        'X-Requested-With': 'XMLHttpRequest',
      }, this.headers, this.auth ? {
        Authorization: [this.auth.username, this.auth.password].join(' '),
      } : {}), (value, name) => {
        xhr.setRequestHeader(name, value);
      });
      xhr.responseType = this.responseType;
      xhr.timeout = this.timeout;
      xhr.withCredentials = this.withCredentials;
      xhr.send(((formData = new FormData()) => {
        const { data } = this;

        utils.forEach(utils.isFunction(data) ? data(item) : data, (name, value) => {
          formData.append(name, value);
        });
        formData.append(this.name, file, file.name);

        return formData;
      })());
    },

    preview(event: Event, item: Upload.Item) {
      if (this.onPreview(event, item, this.list) === false && !event.defaultPrevented) {
        event.preventDefault();
      }
    },

    remove(event: Event, item: Upload.Item, index: number) {
      if (this.onRemove(event, item, this.list) === false || event.defaultPrevented) {
        return;
      }

      item.tooltip = '';
      this.abort(item);
      this.list.splice(index, 1);
      this.update();
    },
  },

  watch: {
    value() {
      this.init();
    },
  },

  created() {
    this.init();
  },
};
