# Tooltip

> Tooltip builds in the [Popper.js](https://popper.js.org/) for positioning.

## Examples

```html
<template>
  <tc-container>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="top-start" type="info" size="small" outline>Top start</tc-button>
        <tc-tooltip target="#top-start" container="body" content="Tooltip on top start" placement="top-start"></tc-tooltip>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="top" type="info" size="small" outline>Top</tc-button>
        <tc-tooltip target="#top" container="body" content="Tooltip on top" placement="top"></tc-tooltip>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="top-end" type="info" size="small" outline>Top end</tc-button>
        <tc-tooltip target="#top-end" container="body" content="Tooltip on top end" placement="top-end"></tc-tooltip>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="left-start" type="info" size="small" outline>Left start</tc-button>
        <tc-tooltip target="#left-start" container="body" content="Tooltip on left <br> start" placement="left-start"></tc-tooltip>
      </tc-col>
      <tc-col :span="4" :offset="4">
        <tc-button id="right-start" type="info" size="small" outline>Right start</tc-button>
        <tc-tooltip target="#right-start" container="body" content="Tooltip on right <br> start" placement="right-start"></tc-tooltip>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="left" type="info" size="small" outline>Left</tc-button>
        <tc-tooltip target="#left" container="body" content="Tooltip on left" placement="left"></tc-tooltip>
      </tc-col>
      <tc-col :span="4" :offset="4">
        <tc-button id="right" type="info" size="small" outline>Right</tc-button>
        <tc-tooltip target="#right" container="body" content="Tooltip on right" placement="right"></tc-tooltip>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="left-end" type="info" size="small" outline>Left end</tc-button>
        <tc-tooltip target="#left-end" container="body" content="Tooltip on left <br> end" placement="left-end"></tc-tooltip>
      </tc-col>
      <tc-col :span="4" :offset="4">
        <tc-button id="right-end" type="info" size="small" outline>Right end</tc-button>
        <tc-tooltip target="#right-end" container="body" content="Tooltip on right <br> end" placement="right-end"></tc-tooltip>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col :span="4">
        <tc-button id="bottom-start" type="info" size="small" outline>Bottom start</tc-button>
        <tc-tooltip target="#bottom-start" container="body" content="Tooltip on bottom start" placement="bottom-start"></tc-tooltip>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="bottom" type="info" size="small" outline>Bottom</tc-button>
        <tc-tooltip target="#bottom" container="body" content="Tooltip on bottom" placement="bottom"></tc-tooltip>
      </tc-col>
      <tc-col :span="4">
        <tc-button id="bottom-end" type="info" size="small" outline>Bottom end</tc-button>
        <tc-tooltip target="#bottom-end" container="body" content="Tooltip on bottom end" placement="bottom-end"></tc-tooltip>
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

  .tc-tooltip,
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
    <tc-tooltip target="#click" content="A simple tooltip" trigger="click"></tc-tooltip>
    <tc-button id="hover" type="info">Hover</tc-button>
    <tc-tooltip target="#hover" content="A simple tooltip" trigger="hover"></tc-tooltip>
    <tc-button id="focus" type="info">Focus</tc-button>
    <tc-tooltip target="#focus" content="A simple tooltip" trigger="focus"></tc-tooltip>
    <tc-button id="manual" type="info" @click="toggle">Manual</tc-button>
    <tc-tooltip target="#manual" content="A simple tooltip" trigger="manual" v-model="visible"></tc-tooltip>
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
    <tc-tooltip target="#toggle" trigger="hover" content="A simple tooltip" :disabled="disabled"></tc-tooltip>
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

## Directive (`v-tc-tooltip`)

The props of the tooltip mounted by the directive:

- `container`: body.
- `content`: the directive's value, if it is not specified, the current element's `title` attribute will be used as the content.
- `target`: the current element.
- `trigger`: hover.

```html
<template>
  <div>
    <abbr v-tc-tooltip="'HyperText Markup Language'" title="">HTML</abbr>
    <abbr v-tc-tooltip title="Cascading Style Sheets">CSS</abbr>
  </div>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| animation | `Boolean` | `true` | - | Indicates if show the tooltip with fade transition or not. |
| container | `String` \| `Element` | - | - | The container for placing the tooltip. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| content | `String` \| `Function` \| `Object` | - | - | The content of the tooltip, can be text, HTML, Vue component or render function which returns VNode. If it is not specified, the `$slots.default` will be used as the content. If `$slots.default` is undefined, the `target` element's `title` attribute will be used as the title. |
| delay | `Number` \| `Object` | `0` | - | Delay showing and hiding the tooltip (ms). Object structure is: `{ "show": 500, "hide": 100 }`. |
| disabled | `Boolean` | `false` | - | Indicates if the tooltip is disabled or not. |
| fallbackPlacement | `String` | `'flip'` | flip, clockwise, counterclockwise | Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's [behavior docs](https://popper.js.org/popper-documentation.html#modifiers..flip.behavior) |
| offset | `Number` | - | - | Offset of the tooltip relative to its target. For more information refer to Popper.js's [offset docs](https://popper.js.org/popper-documentation.html#modifiers..offset.offset). |
| placement | `String` | `'top'` | auto-start, auto, auto-end, top-start, top, top-end, right-start, right, right-end, bottom-start, bottom, bottom-end, left-start, left, left-end | How to position the tooltip. For more information refer to Popper.js's [placement docs](https://popper.js.org/popper-documentation.html#Popper.placements). |
| target | `String` \| `Element` | `$el.parentElement` | - | The target element for toggling the tooltip. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| trigger | `String` | `'hover focus'` | click, hover, focus, manual | How tooltip is triggered. You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger. |
| visible | `Boolean` | `false` | - | Indicates if the tooltip is visible or not. This prop also used by `v-model`. |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | Shows the tooltip. |
| hide | `()` | Hides the tooltip. |
| toggle | `()` | Toggles the visibility of the tooltip. |
| update | `()` | Updates the position of the tooltip. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | This event fires immediately when the `show` method is called. |
| shown | `()` | This event is fired when a tooltip element has been shown completely. |
| hide | `()` | This event is fired immediately when the `hide` method has been called. |
| hidden | `()` | This event is fired when a tooltip element has been hidden completely. |
