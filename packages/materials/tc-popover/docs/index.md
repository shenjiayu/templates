# Popover

> Popover builds in the [Popper.js](https://popper.js.org/) for positioning.

## Examples

```html
<template>
  <tc-container>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="top-start" type="info" size="small" outline>Top start</tc-button>
        <tc-popover target="#top-start" container="body" title="Popover on top start" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="top-start" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="top" type="info" size="small" outline>Top</tc-button>
        <tc-popover target="#top"  container="body" title="Popover on top" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="top" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="top-end" type="info" size="small" outline>Top end</tc-button>
        <tc-popover target="#top-end" container="body" title="Popover on top end" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="top-end" trigger="hover"></tc-popover>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="left-start" type="info" size="small" outline>Left start</tc-button>
        <tc-popover target="#left-start" container="body" title="Popover on left start" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="left-start" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4" :offset="4">
        <tc-button id="right-start" type="info" size="small" outline>Right start</tc-button>
        <tc-popover target="#right-start" container="body" title="Popover on right start" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="right-start" trigger="hover"></tc-popover>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="left" type="info" size="small" outline>Left</tc-button>
        <tc-popover target="#left" container="body" title="Popover on left" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="left" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4" :offset="4">
        <tc-button id="right" type="info" size="small" outline>Right</tc-button>
        <tc-popover target="#right" container="body" title="Popover on right" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="right" trigger="hover"></tc-popover>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="left-end" type="info" size="small" outline>Left end</tc-button>
        <tc-popover target="#left-end" container="body" title="Popover on left end" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="left-end" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4" :offset="4">
        <tc-button id="right-end" type="info" size="small" outline>Right end</tc-button>
        <tc-popover target="#right-end" container="body" title="Popover on right end" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="right-end" trigger="hover"></tc-popover>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="bottom-start" type="info" size="small" outline>Bottom start</tc-button>
        <tc-popover target="#bottom-start" container="body" title="Popover on bottom start" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="bottom-start" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="bottom" type="info" size="small" outline>Bottom</tc-button>
        <tc-popover target="#bottom" container="body" title="Popover on bottom" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="bottom" trigger="hover"></tc-popover>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="bottom-end" type="info" size="small" outline>Bottom end</tc-button>
        <tc-popover target="#bottom-end" container="body" title="Popover on bottom end" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." placement="bottom-end" trigger="hover"></tc-popover>
      </tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-container {
    max-width: 22.5rem;
  }

  .tc-col {
    padding: .25rem;
  }

  .tc-popover,
  .tc-button {
    width: 100%;
  }
</style>
```

## Triggers

```html
<template>
  <div>
    <tc-button id="click" type="info">Click</tc-button>
    <tc-popover target="#click" content="A simple popover" trigger="click"></tc-popover>
    <tc-button id="hover" type="info">Hover</tc-button>
    <tc-popover target="#hover" content="A simple popover" trigger="hover"></tc-popover>
    <tc-button id="focus" type="info">Focus</tc-button>
    <tc-popover target="#focus" content="A simple popover" trigger="focus"></tc-popover>
    <tc-button id="manual" type="info" @click="toggle">Manual</tc-button>
    <tc-popover target="#manual" content="A simple popover" trigger="manual" v-model="visible"></tc-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },

    methods: {
      toggle() {
        this.visible = !this.visible;
      },
    },
  };
</script>
```

## Disabled

```html
<template>
  <div>
    <p>Disabled: {{ disabled }}</p>
    <tc-button id="toggle" type="info" @click="toggle">{{ disabled ? 'Enable' : 'Disable' }}</tc-button>
    <tc-popover target="#toggle" trigger="hover" content="A simple popover" :disabled="disabled"></tc-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: true,
      };
    },

    methods: {
      toggle() {
        this.disabled = !this.disabled;
      },
    },
  };
</script>
```

## Directive (`v-tc-popover`)

The props of the popover mounted by the directive:

- `container`: body.
- `content`: the directive's value, if it is not specified, the current element's `title` attribute will be used as the content.
- `target`: the current element.
- `trigger`: hover.
- `title`: the current element's `title` attribute, `false` when the directive's value is undefined.

```html
<template>
  <div>
    <abbr v-tc-popover="'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'" title="Hypertext Markup Language">HTML</abbr>
    <abbr v-tc-popover="'Cascading Style Sheets'" title="">CSS</abbr>
    <abbr v-tc-popover title="JavaScript">JS</abbr>
  </div>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| animation | `Boolean` | `true` | - | Indicates if show the popover with fade transition or not. |
| container | `String` \| `Element` | - | - | The container for placing the popover. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| content | `String` \| `Function` \| `Object` | - | - | The content of the popover, can be text, HTML, Vue component or render function which returns VNode. If it is not specified, the `$slots.default` will be used as the content. |
| delay | `Number` \| `Object` | `0` | - | Delay showing and hiding the popover (ms). Object structure is: `{ "show": 500, "hide": 100 }`. |
| disabled | `Boolean` | `false` | - | Indicates if the popover is disabled or not. |
| fallbackPlacement | `String` | `'flip'` | flip, clockwise, counterclockwise | Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's [behavior docs](https://popper.js.org/popper-documentation.html#modifiers..flip.behavior) |
| offset | `Number` | - | - | Offset of the popover relative to its target. For more information refer to Popper.js's [offset docs](https://popper.js.org/popper-documentation.html#modifiers..offset.offset). |
| placement | `String` | `'top'` | auto-start, auto, auto-end, top-start, top, top-end, right-start, right, right-end, bottom-start, bottom, bottom-end, left-start, left, left-end | How to position the popover. For more information refer to Popper.js's [placement docs](https://popper.js.org/popper-documentation.html#Popper.placements). |
| target | `String` \| `Element` | `$el.parentElement` | - | The target element for toggling the popover. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| title | `String` \| `Boolean` \| `Function` \| `Object` | - | - | The title of the popover, can be text, HTML, Vue component or render function which returns VNode. If it is `false`, then the title will be hidden directly. If it is not specified, the `target` element's `title` attribute will be used as the title. |
| trigger | `String` | `'click'` | click, hover, focus, manual | How popover is triggered. You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger. |
| visible | `Boolean` | `false` | - | Indicates if the popover is visible or not. This prop also used by `v-model`. |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | Shows the popover. |
| hide | `()` | Hides the popover. |
| toggle | `()` | Toggles the visibility of the popover. |
| update | `()` | Updates the position of the popover. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | This event fires immediately when the `show` method is called. |
| shown | `()` | This event is fired when a popover element has been shown completely. |
| hide | `()` | This event is fired immediately when the `hide` method has been called. |
| hidden | `()` | This event is fired when a popover element has been hidden completely. |
