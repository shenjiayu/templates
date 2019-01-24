# Loading

## Basic usage

```html
<template>
  <tc-card>
    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
    <tc-loading visible></tc-loading>
  </tc-card>
</template>
```

## Advanced usage

```html
<template>
  <div>
    <tc-card id="card">
      <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
    </tc-card>
    <tc-loading target="#card" v-model="loading" style="background-color: rgba(0,0,0,.75); color: #fff;">Loading...</tc-loading>
    <tc-button type="primary" @click="toggle">Toggle</tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },

    methods: {
      toggle() {
        this.loading = !this.loading;
      },
    },
  };
</script>

<style scoped>
  .tc-card {
    margin-bottom: 1rem;
  }
</style>
```

## Icons

```html
<template>
  <tc-card>
    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>
    <tc-loading icon="rotate-cw" visible></tc-loading>
  </tc-card>
  <tc-card>
    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>
    <tc-loading icon="refresh-cw" visible></tc-loading>
  </tc-card>
</template>

<style scoped>
  .tc-card + .tc-card {
    margin-top: 1rem;
  }
</style>
```

## Fullscreen

```html
<template>
  <div>
    <tc-loading v-model="loading" @click="hide" fullscreen></tc-loading>
    <tc-button type="primary" @click="show">Show fullscreen loading</tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
      };
    },

    methods: {
      show() {
        this.loading = true;
        this.timeout = setTimeout(() => {
          this.hide();
        }, 2000);
      },

      hide() {
        clearTimeout(this.timeout);
        this.loading = false;
      },
    },
  };
</script>
```

## Directive (`v-tc-loading`)

The props of the loading mounted by the directive:

- `fullscreen`: `false` or `true` if a "fullscreen" modifier is specified.
- `lock`: `false` or `true` if a "lock" modifier is specified.
- `target`: The current element or `document.body` if a "fullscreen" modifier is specified.
- `visible`: The current binding value.

```html
<template>
  <div>
    <tc-card v-tc-loading="loading">
      <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
    </tc-card>
    <tc-button type="primary" @click="toggle">Toggle</tc-button>
    <tc-button type="primary" v-tc-loading.fullscreen="fullscreenLoading" @click="showFullscreenLoading">Show fullscreen loading</tc-button>
    <tc-button type="primary" v-tc-loading.fullscreen.lock="fullscreenLockLoading" @click="showFullscreenLockLoading">Show fullscreen lock loading</tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        fullscreenLoading: false,
        fullscreenLockLoading: false,
      };
    },

    methods: {
      toggle() {
        this.loading = !this.loading;
      },

      showFullscreenLoading() {
        this.fullscreenLoading = true;

        this.timeout = setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },

      showFullscreenLockLoading() {
        this.fullscreenLockLoading = true;

        this.timeout = setTimeout(() => {
          this.fullscreenLockLoading = false;
        }, 2000);
      },
    },
  };
</script>

<style scoped>
  .tc-card {
    margin-bottom: 1rem;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| content | `String` \| `Function` \| `Object` | `$slots.default` | - | The content of the loading, can be text, HTML, Vue component or render function which returns VNode. |
| fullscreen | `Boolean` | `false` | - | Indicates if show the loading with fade transition or not. |
| icon | `String` \| `Boolean` | `'loader'` | See [Icon](/#/icon). | The icon type. Set `false` to remove icon. |
| lock | `Boolean` | `false` | - | Indicates if lock (`overflow: hidden`) the target element or not. |
| target | `String` \| `Element` | `$el.parentElement` or `document.body` if `fullscreen` is `true` | - | The target element for toggling the loading. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| visible | `Boolean` | `false` | - | Indicates if the loading is visible or not. This prop also used by `v-model`. |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | Shows the loading. |
| hide | `()` | Hides the loading. |
| toggle | `()` | Toggles the visibility of the loading. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | This event fires immediately when the `show` method is called. |
| shown | `()` | This event is fired when a loading element has been shown completely. |
| hide | `()` | This event is fired immediately when the `hide` method has been called. |
| hidden | `()` | This event is fired when a loading element has been hidden completely. |
