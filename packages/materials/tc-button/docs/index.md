# Button

## Types

### Custom types

```html
<template>
  <div>
    <tc-button>Default</tc-button>
    <tc-button type="primary">Primary</tc-button>
    <tc-button type="secondary">Secondary</tc-button>
    <tc-button type="success">Success</tc-button>
    <tc-button type="danger">Danger</tc-button>
    <tc-button type="warning">Warning</tc-button>
    <tc-button type="info">Info</tc-button>
    <tc-button type="light">Light</tc-button>
    <tc-button type="dark">Dark</tc-button>
    <tc-button type="link">Link</tc-button>
  </div>
</template>
```

### Native types

```html
<template>
  <div>
    <tc-button type="primary">Default Button</tc-button>
    <tc-button type="reset primary">Reset Button</tc-button>
    <tc-button type="submit primary">Submit Button</tc-button>
  </div>
</template>
```

## Tags

```html
<template>
  <div>
    <tc-button type="primary">&lt;button&gt;</tc-button>
    <tc-button type="primary" tag="a">&lt;a&gt;</tc-button>
    <tc-button type="primary" tag="input" value="&lt;input&gt;"></tc-button>
  </div>
</template>
```

## Sizes

```html
<template>
  <div>
    <tc-button type="primary" size="small">Small button</tc-button>
    <tc-button type="primary">Default button</tc-button>
    <tc-button type="primary" size="large">Large button</tc-button>
  </div>
</template>
```

```html
<template>
  <div>
    <p>
      <tc-button type="primary" size="small" block>Small block button</tc-button>
    </p>
    <p>
      <tc-button type="primary" block>Default block button </tc-button>
    </p>
    <p>
      <tc-button type="primary" size="large" block>Large block button</tc-button>
    </p>
  </div>
</template>
```

## Outline

```html
<template>
  <div>
    <tc-button type="primary" outline>Primary</tc-button>
    <tc-button type="secondary" outline>Secondary</tc-button>
    <tc-button type="success" outline>Success</tc-button>
    <tc-button type="info" outline>Info</tc-button>
    <tc-button type="warning" outline>Warning</tc-button>
    <tc-button type="danger" outline>Danger</tc-button>
    <tc-button type="light" outline>Light</tc-button>
    <tc-button type="dark" outline>Dark</tc-button>
    <tc-button type="link" outline>Link</tc-button>
  </div>
</template>
```

## Disabled

```html
<template>
  <div>
    <tc-button type="primary" disabled>Primary</tc-button>
    <tc-button type="secondary" disabled>Secondary</tc-button>
  </div>
</template>
```

## Icons

```html
<template>
  <div>
    <tc-button type="primary" icon="search">Search</tc-button>
    <tc-button type="primary" :icon="{ type: 'search', strokeWidth: 3 }">Search</tc-button>
    <tc-button type="primary" :icon="{ type: 'chevrons-right', end: true }">More</tc-button>
    <tc-button type="primary" :icon="['menu', { type: 'chevron-down', end: true }]">Menu</tc-button>
  </div>
</template>
```

### Sizes

```html
<template>
  <div>
    <tc-button type="primary" icon="plus-circle" size="small">Small button</tc-button>
    <tc-button type="primary" icon="plus-circle">Default button</tc-button>
    <tc-button type="primary" icon="plus-circle" size="large">Large button</tc-button>
  </div>
</template>
```

## Rounded

```html
<template>
  <div>
    <tc-button type="primary" rounded>Search</tc-button>
    <tc-button type="primary" icon="search" rounded></tc-button>
    <tc-button type="primary" icon="search" rounded>Search</tc-button>
  </div>
</template>
```

## Loading

```html
<template>
  <div>
    <tc-button type="primary" loading>Loading</tc-button>
    <tc-button type="primary" :icon="{ type: 'loader', end: true }" loading>Loading</tc-button>
    <tc-button type="primary" :icon="['loader', { type: 'loader', end: true }]" loading>Loading</tc-button>
    <tc-button type="primary" icon="rotate-cw" loading>Loading</tc-button>
    <tc-button type="primary" icon="refresh-cw" loading>Loading</tc-button>
  </div>
</template>
```

## Button Group

### Examples

```html
<template>
  <div>
    <tc-button-group>
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
    <tc-button-group>
      <tc-button type="primary" icon="chevron-left" rounded></tc-button>
      <tc-button type="primary" icon="chevron-right" rounded></tc-button>
    </tc-button-group>
    <tc-button-group>
      <tc-button type="primary" icon="chevron-left" rounded>Previous</tc-button>
      <tc-button type="primary" :icon="{ type: 'chevron-right', end: true }" rounded>Next</tc-button>
    </tc-button-group>
  </div>
</template>
```

### Sizes

```html
<template>
  <div>
    <tc-button-group size="small">
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
    <tc-button-group>
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
    <tc-button-group size="large">
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
  </div>
</template>
```

### Vertical

```html
<template>
  <div>
    <tc-button-group size="small" vertical>
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
    <tc-button-group vertical>
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
    <tc-button-group size="large" vertical>
      <tc-button type="primary">Left</tc-button>
      <tc-button type="primary">Middle</tc-button>
      <tc-button type="primary">Right</tc-button>
    </tc-button-group>
  </div>
</template>
```

## Props of Button

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| block | `Boolean` | `false` | - | Creates a block button with full width. |
| disabled | `Boolean` | `false` | - | Disable the button. |
| icon | `String` \| `Object` \| `Array` | - | (See [Icon](/#/components/icon) component) | Add icon(s) into the button. String as icon type, object as icon props, array as multiple icons. Add `end: true` property to object for placing icon to the end. |
| loading | `Boolean` | `false` | - | Show a loading status icon. The default icon is `'loader'`. |
| outline | `Boolean` | `false` | - | Outline the button. |
| rounded | `Boolean` | `false` | - | Indicates if the button is rounded or not. |
| size | `String` | - | small, large | The size of the button. |
| tag | `String` | `'button'` | button, input, a | The tag of the button. |
| type | `String` | `'button'` | button, submit, reset \| primary, secondary, danger, warning, info, light, dark, link | The type(s) of the button. Usage: `'[native] [custom]'`. e.g.: `'submit'`, `'primary'`, `'submit primary'`. |

## Props of Button Group

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| vertical | `Boolean` | `false` | - | Indicates if the buttons is shown in the vertical direction. |
| size | `String` | - | small, large | The size of the button group. |
| tag | `String` | `'div'` | - | The tag of the button group. |
