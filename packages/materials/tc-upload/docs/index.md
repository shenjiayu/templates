# Upload

## Basic usage

```html
<template>
  <tc-upload url="https://jsonplaceholder.typicode.com/posts">
    <tc-button type="primary" icon="upload">Upload</tc-button>
  </tc-upload>
</template>
```

## Advanced usage

```html
<template>
  <div>
    <tc-upload v-model="value" accept="image/jpg,image/jpeg,image/png,image/gif" url="https://jsonplaceholder.typicode.com/posts" :on-start="onStart" :before-upload="beforeUpload" :on-success="onSuccess" :on-error="onError" :concurrency="2" multiple>
      <div class="zone">
        <tc-icon type="upload-cloud"></tc-icon>
        <span>Drop file here or click to upload</span>
      </div>
    </tc-upload>
    <div class="note">
      <tc-icon type="alert-circle" size="16"></tc-icon>
      <span>Only accept JPG, PNG or GIF images with a size less than 500KB.</span>
    </div>
  </div>
</template>

<script>
  const acceptedTypes = /^image\/(?:jpeg|png|gif)$/;
  const acceptedMaxSize = 500000;

  export default {
    data() {
      return {
        value: [],
      };
    },

    methods: {
      onStart(list = []) {
        list.forEach((item) => {
          const { file } = item;

          item.icon = 'image';

          if (file) {
            item.name = `${file.name} (${file.type}, ${Math.round(file.size / 1000)}KB)`;

            if (!acceptedTypes.test(file.type)) {
              item.tooltip = `Not accepted file type`;
              item.status = 'error';
            } else if (file.size > acceptedMaxSize) {
              item.tooltip = 'Exceeds the accepted max size';
              item.status = 'error';
            }
          }
        });
      },

      beforeUpload(item) {
        const { file } = item;

        if (file && !(acceptedTypes.test(file.type) || file.size <= acceptedMaxSize)) {
          return false;
        }
      },

      onSuccess(response) {
        console.log(response);
      },

      onError(error, item) {
        item.tooltip = `Upload ${error}`;
      },
    },
  };
</script>

<style scoped>
  .zone {
    align-items: center;
    background-color: #f8f8f8;
    border: 1px dashed #eee;
    border-radius: .25rem;
    color: #aaa;
    display: flex;
    flex-direction: column;
    height: 180px;
    justify-content: center;
    width: 320px;
  }

  .zone:hover {
    border-color: #0074d9;
    color: #0074d9;
  }

  .note {
    color: gray;
    font-size: .875rem;
    margin-top: .5rem;
  }

  .note > * {
    vertical-align: middle;
  }
</style>
```

## Lists

### Default list

```html
<template>
  <tc-upload v-model="value" url="https://jsonplaceholder.typicode.com/posts" multiple>
    <tc-button type="primary" icon="upload">Upload</tc-button>
  </tc-upload>
</template>

<script>
  export default {
    data() {
      return {
        value: [
          {
            name: 'foo.png',
            url: 'https://dummyimage.com/160',
          },
          {
            name: 'bar.png',
            url: 'https://dummyimage.com/160',
          },
          {
            name: 'baz.png',
            url: 'https://dummyimage.com/160',
          },
        ],
      };
    },
  };
</script>
```

### Picture list

```html
<template>
  <tc-upload v-model="value" url="https://jsonplaceholder.typicode.com/posts" list-type="picture" multiple>
    <tc-button type="primary" icon="upload">Upload</tc-button>
  </tc-upload>
</template>

<script>
  export default {
    data() {
      return {
        value: [
          {
            name: 'foo.png',
            url: 'https://dummyimage.com/48',
          },
          {
            name: 'bar.png',
            url: 'https://dummyimage.com/48',
          },
          {
            name: 'baz.png',
            url: 'https://dummyimage.com/48',
          },
        ],
      };
    },
  };
</script>
```

### Picture card list

```html
<template>
  <tc-upload url="https://jsonplaceholder.typicode.com/posts" :value="value" list-type="picture-card" multiple>
    <tc-icon type="camera"></tc-icon>
  </tc-upload>
</template>

<script>
  export default {
    data() {
      return {
        value: [
          {
            name: 'foo.png',
            url: 'https://dummyimage.com/80',
          },
          {
            name: 'bar.png',
            url: 'https://dummyimage.com/80',
          },
          {
            name: 'baz.png',
            url: 'https://dummyimage.com/80',
          },
        ],
      };
    },
  };
</script>
```

### Custom list

```html
<template>
  <ul class="list">
    <li class="item" v-for="(item, index) in list" :key="index">
      <div class="item__card" :class="item.status ? `item__card--${item.status}` : ''">
        <a class="item__content" :href="item.url">
          <img :src="item.url" :alt="item.name">
        </a>
        <tc-progress class="item__progress" v-if="item.status === 'process'" :value="item.percent"></tc-progress>
        <div class="item__status" v-if="item.status">
          <tc-icon v-if="item.status === 'wait'" type="clock" size="12"></tc-icon>
          <tc-icon v-else-if="item.status === 'success'" type="check" size="12"></tc-icon>
          <tc-icon v-else-if="item.status === 'error'" type="x" size="12"></tc-icon>
          <tc-icon v-else type="loader" size="12" animation="rotation"></tc-icon>
        </div>
        <div class="item__action" @click="remove(item)">
          <tc-icon type="x" size="12"></tc-icon>
        </div>
      </div>
    </li>
    <tc-upload ref="upload" tag="li" class="item" v-model="list" url="https://jsonplaceholder.typicode.com/posts" list-type="none" :on-start="onStart" multiple>
      <div class="item__card item__card--plus">
        <tc-icon type="plus"></tc-icon>
      </div>
    </tc-upload>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            name: 'foo.png',
            url: 'https://dummyimage.com/80',
          },
          {
            name: 'bar.png',
            url: 'https://dummyimage.com/80',
          },
          {
            name: 'baz.png',
            url: 'https://dummyimage.com/80',
          },
        ],
      };
    },

    methods: {
      onStart(list = []) {
        list.forEach((item) => {
          if (!item.url && item.file) {
            if (URL) {
              item.url = URL.createObjectURL(item.file);
            } else if (FileReader) {
              const reader = new FileReader();

              reader.onload = () => {
                item.url = reader.result;
              };

              reader.readAsDataURL(item.file);
            }
          }
        });
      },

      remove(item) {
        this.$refs.upload.abort(item);
        this.list.splice(this.list.indexOf(item), 1);
      },
    },
  };
</script>

<style scoped>
  .list {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  .item {
    float: left;
    margin-bottom: .5rem;
    margin-right: .5rem;
    position: relative;
  }

  .item__card {
    align-items: center;
    border: 1px solid #eee;
    border-radius: 50%;
    color: silver;
    display: flex;
    height: 4rem;
    justify-content: center;
    width: 4rem;
  }

  .item__card:hover .item__action {
    opacity: 1;
    z-index: 1;
  }

  .item__card--process {
    border-color: #0074d9;
    color: #0074d9;
  }

  .item__card--success {
    border-color: #2ecc40;
    color: #2ecc40;
  }

  .item__card--error {
    border-color: #ff4136;
    color: #ff4136;
  }

  .item__card--plus {
    background-color: #f8f8f8;
    border-style: dashed;
    cursor: pointer;
  }

  .item__card--plus:hover {
    border-color: #0074d9;
    color: #0074d9;
  }

  .item__content {
    align-items: center;
    border-radius: inherit;
    display: flex;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  .item__content > img {
    width: 100%;
  }

  .item__progress {
    border-radius: inherit;
    height: 100%;
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    width: 100%;
  }

  .item__progress > :first-child {
    border-radius: 0;
  }

  .item__status,
  .item__action {
    background-color: #fff;
    border: inherit;
    border-radius: inherit;
    display: flex;
    padding: .25rem;
    position: absolute;
    right: 0;
    top: 0;
  }

  .item__action {
    cursor: pointer;
    opacity: 0;
    z-index: -1;
  }

  .item__action:hover {
    border-color: #0074d9;
    color: #0074d9;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| accept | `String` | - | - | The [accept]((https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)) attribute for the built-in `<input type="file">` element. |
| auth | `Object` | - | - | Indicates that HTTP Basic auth should be used, and supplies credentials. This will set an `Authorization` header, overwriting any existing `Authorization` custom headers you have set using `headers` prop. Object structure: `{ username: 'root', password: '123456' }` |
| auto-upload | `Boolean` | `true` | - | Indicates if start to upload automatically after files chosen or not. |
| capture | `Boolean` | `false` | - | The [capture]((https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-capture)) attribute for the built-in `<input type="file">` element. |
| concurrency | `Number` | `1` | - | The max number of starting upload queues at the same time. Requires `multiple` to be `true` when the number great than `1`. |
| data | `Object` \| `Function` | - | - | The extra data (or parameters) to be sent as the request body. |
| disabled | `Boolean` | `false` | - | Indicates if the upload is disabled or not. |
| headers | `Object` | - | - | The custom headers to be sent. |
| list-type | `String` | `'text'` | text, picture, picture-card, none | The type or layout of the upload list. |
| multiple | `Boolean` | `false` | - | The [multiple]((https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)) attribute for the built-in `<input type="file">` element. |
| method | `String` | `'post'` | post, put | The request method to be used when making the request. |
| name | `String` | `'file'` | - | The [name]((https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name)) attribute for the built-in `<input type="file">` element. |
| on-preview | `Function` | `(event, item, list) => {}` | - | The callback function to be executed when file link or icon is clicked. Returns `false` to prevent link assigning. |
| on-remove | `Function` | `(event, item, list) => {}` | - | The callback function to be executed when remove file button is clicked. Returns `false` to prevent file removing. |
| on-start | `Function` | `(list) => {}` | - | The callback function to be executed when start all upload queues. Returns `false` can cancel all the upload queues. |
| on-end | `Function` | `(list) => {}` | - | The callback function to be executed when all upload queues were completed. |
| before-upload | `Function` | `(item, list) => {}` | - | The callback function to be executed before an upload queue start. Returns `false` can cancel the upload queue. |
| on-upload | `Function` | `(item, list) => {}` | - | The callback function to be executed when an upload queue start. |
| on-progress | `Function` | `(event, item, list) => {}` | - | The callback function to be executed when an upload queue is in progress (uploading). |
| on-success | `Function` | `(response, item, list) => {}` | - | The callback function to be executed when an upload queue success. |
| on-error | `Function` | `(error, item, list) => {}` | - | The callback function to be executed when an upload queue failed. |
| on-complete | `Function` | `(item, list) => {}` | - | The callback function to be executed when an upload queue complete (no matter success or failure). |
| removable | `Boolean` | `true` | - | Indicates if show a remove button to remove upload item or not. |
| response-type | `String` | `'json'` | See [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType). | The type of data that the server will respond. |
| tag | `String` | `'div'` | - | The tag of the upload element. |
| timeout | `Number` | `0` | - | Specifies the number of milliseconds before the request times out. See [XMLHttpRequest.timeout](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout) |
| url | `String` | - | - | The server URL that will be used for the request. |
| value | `Array` | - | - | The value of the upload. This prop also used by `v-model`. |
| with-credentials | `Boolean` | `false` | - | Indicates whether or not cross-site Access-Control requests should be made using credentials. |
| xhr | `Function` | `(item, list) => new XMLHttpRequest()` | - | Generates a XMLHttpRequest instance for each upload item or customizes request totally. |

The object structure of `value`'s element:

```js
{
  /**
   * The attrs of the item.
   * @type {Object}
   * @default {}
   */
  attrs: {
    download: 'filename.extension',
  },

  /**
   * The file object of the item.
   * @type {File}
   * @default null
   */
  file: null,

  /**
   * The icon of the item.
   * @type {string|Object}
   * @default 'file'
   */
  icon: 'image',

  /**
   * The name of the file.
   * @type {string}
   */
  name: 'filename.extension',

  /**
   * The percent of the upload progress of current file.
   * @type {number}
   * @default 0
   */
  percent: 0.5,

  /**
   * The status of the item. One of "wait", "process", "success" and "error".
   * @type {string}
   * @default ''
   */
  status: 'error',

  /**
   * The tooltip of the item.
   * @type {string}
   * @default ''
   */
  tooltip: 'error message',

  /**
   * The uid of the item.
   * @type {number}
   * @default (auto-generated)
   */
  uid: 1,

  /**
   * The url of the file.
   * This will be generated automatically by `URL.createObjectURL` or `FileReader` after file chosen when `listType` is `'picture'` or `'picture-card'`.
   * @type {string}
   */
  url: '',

  /**
   * The XMLHttpRequest instance of the item.
   * @type {XMLHttpRequest}
   * @default null
   */
  xhr: null,
}
```

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| start | `()` | Start to upload files (Only available when `autoUpload` property is set to `false`). |
| abort | `([item])` | Abort the upload list or the given item. |
