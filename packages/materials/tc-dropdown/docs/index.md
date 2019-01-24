# Dropdown

> Dropdown builds in the [Popper.js](https://popper.js.org/) for positioning.

## Basic usage

```html
<template>
  <div>
    <tc-button id="dropdown-button" type="primary" :icon="{ type: 'chevron-down', end: true }" aria-haspopup="true" aria-expanded="false">Dropdown button</tc-button>
    <tc-dropdown target="#dropdown-button" aria-labelledby="dropdown-button">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Split button

```html
<template>
  <div>
    <tc-button-group>
      <tc-button type="primary" aria-haspopup="true" aria-expanded="false">Dropdown</tc-button>
      <tc-button id="dropdown-left" type="primary" icon="chevron-down"></tc-button>
    </tc-button-group>
    <tc-dropdown target="#dropdown-left" aria-labelledby="dropdown-left">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
    <tc-button-group>
      <tc-button type="primary" aria-haspopup="true" aria-expanded="false">Dropdown (right-aligned)</tc-button>
      <tc-button id="dropdown-right" type="primary" icon="chevron-down"></tc-button>
    </tc-button-group>
    <tc-dropdown target="#dropdown-right" placement="bottom-end" aria-labelledby="dropdown-right">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Links

```html
<template>
  <div>
    <tc-button id="dropdown-link" type="primary" tag="a" :icon="{ type: 'chevron-down', end: true }" aria-haspopup="true" aria-expanded="false">Dropdown link</tc-button>
    <tc-dropdown target="#dropdown-link" tag="nav" aria-labelledby="dropdown-link">
      <tc-dropdown-item href="#" tag="a">Link</tc-dropdown-item>
      <tc-dropdown-item href="#" tag="a">Another link</tc-dropdown-item>
      <tc-dropdown-item href="#" tag="a">Something else here</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Dropup

```html
<template>
  <div>
    <tc-button id="dropup-button" type="primary" :icon="{ type: 'chevron-up', end: true }" aria-haspopup="true" aria-expanded="false">Dropup</tc-button>
    <tc-dropdown target="#dropup-button" placement="top-start" aria-labelledby="dropup-button">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Header item

```html
<template>
  <div>
    <tc-button id="dropdown-header" type="primary" :icon="{ type: 'chevron-down', end: true }" aria-haspopup="true" aria-expanded="false">Dropdown menu with header item</tc-button>
    <tc-dropdown target="#dropdown-header" aria-labelledby="dropdown-header">
      <tc-dropdown-item tag="h6" header>Dropdown header</tc-dropdown-item>
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Divider item

```html
<template>
  <div>
    <tc-button id="dropdown-divider" type="primary" :icon="{ type: 'chevron-down', end: true }" aria-haspopup="true" aria-expanded="false">Dropdown menu with divider item</tc-button>
    <tc-dropdown target="#dropdown-divider" aria-labelledby="dropdown-divider">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
      <tc-dropdown-item divider></tc-dropdown-item>
      <tc-dropdown-item>Separated link</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Forms

```html
<template>
  <div>
    <tc-button id="dropdown-form" type="primary" :icon="{ type: 'user', end: true }" aria-haspopup="true" aria-expanded="false">Sign in</tc-button>
    <tc-dropdown target="#dropdown-form" placement="top-start" aria-labelledby="dropdown-form">
      <form @click.stop>
        <p>
          <label for="inputEmail">Email address</label>
          <tc-input type="email" id="inputEmail" name="email" placeholder="email@example.com" required></tc-input>
        </p>
        <p>
          <label for="inputPassword">Password</label>
          <tc-input type="password" id="inputPassword" name="password" placeholder="Password" required></tc-input>
        </p>
        <p>
          <tc-checkbox name="remembered" required>Remember me</tc-checkbox>
        </p>
        <tc-button type="submit primary" block>Sign in</tc-button>
      </form>
      <tc-dropdown-item divider></tc-dropdown-item>
      <tc-dropdown-item tag="a" href="#">New around here? Sign up</tc-dropdown-item>
      <tc-dropdown-item tag="a" href="#">Forgot password?</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>

<style scoped>
  form {
    margin: .25rem .75rem;
  }
</style>
```

## Disabled

```html
<template>
  <div>
    <p>Disabled: {{ disabled }}</p>
    <tc-button id="toggle" type="primary" :icon="{ type: 'chevron-down', end: true }" :disabled="disabled" aria-haspopup="true" aria-expanded="false">Dropdown</tc-button>
    <tc-dropdown target="#toggle" :disabled="disabled" aria-labelledby="toggle">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
    <tc-button id="toggle" :type="disabled ? 'success' : 'danger'" @click="toggle">{{ disabled ? 'Enable' : 'Disable' }}</tc-button>
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

### Disabled item

```html
<template>
  <div>
    <tc-button id="dropdown-disabled" type="primary" :icon="{ type: 'chevron-down', end: true }" aria-haspopup="true" aria-expanded="false">Dropdown menu with disabled item</tc-button>
    <tc-dropdown target="#dropdown-disabled" aria-labelledby="dropdown-disabled">
      <tc-dropdown-item>Action</tc-dropdown-item>
      <tc-dropdown-item>Another action</tc-dropdown-item>
      <tc-dropdown-item disabled>Disabled action</tc-dropdown-item>
      <tc-dropdown-item>Something else here</tc-dropdown-item>
    </tc-dropdown>
  </div>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| animation | `Boolean` | `true` | - | Indicates if show the dropdown with fade transition or not. |
| container | `String` \| `Element` | - | - | The container for placing the dropdown. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| delay | `Number` \| `Object` | `0` | - | Delay showing and hiding the dropdown (ms). Object structure is: `{ "show": 500, "hide": 100 }`. |
| disabled | `Boolean` | `false` | - | Indicates if the dropdown is disabled or not. |
| fallbackPlacement | `String` | `'flip'` | flip, clockwise, counterclockwise | Allow to specify which position Popper will use on fallback. For more information refer to Popper.js's [behavior docs](https://popper.js.org/popper-documentation.html#modifiers..flip.behavior) |
| offset | `Number` | - | - | Offset of the dropdown relative to its target. For more information refer to Popper.js's [offset docs](https://popper.js.org/popper-documentation.html#modifiers..offset.offset). |
| placement | `String` | `'bottom-start'` | auto-start, auto, auto-end, top-start, top, top-end, right-start, right, right-end, bottom-start, bottom, bottom-end, left-start, left, left-end | How to position the dropdown. For more information refer to Popper.js's [placement docs](https://popper.js.org/popper-documentation.html#Popper.placements). |
| tag | `String` | `'div'` | - | The element tag of the dropdown. |
| target | `String` \| `Element` | `$el.parentElement` | - | The target element for toggling the dropdown. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| trigger | `String` | `'click'` | click, manual | How dropdown is triggered. |
| visible | `Boolean` | `false` | - | Indicates if the dropdown is visible or not. This prop also used by `v-model`. |

## Props of Dropdown Item

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| disabled | `Boolean` | `false` | - | Indicates if the dropdown item is disabled or not. |
| divider | `Boolean` | `false` | - | Indicates if the dropdown item is a divider or not. |
| header | `Boolean` | `false` | - | Indicates if the dropdown item is a header or not. |
| tag | `String` | `'button'` | - | The element tag of the dropdown item. |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | Shows the dropdown. |
| hide | `()` | Hides the dropdown. |
| toggle | `()` | Toggles the visibility of the dropdown. |
| update | `()` | Updates the position of the dropdown. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | This event fires immediately when the `show` method is called. |
| shown | `()` | This event is fired when a dropdown element has been shown completely. |
| hide | `()` | This event is fired immediately when the `hide` method has been called. |
| hidden | `()` | This event is fired when a dropdown element has been hidden completely. |
