# Number Input

Number input with optional controls.

## Basic usage

```html
<template>
  <div>
    <p>Value: {{ value }}</p>
    <tc-number-input v-model="value" :min="1" :max="10" inline controls></tc-number-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 1,
      };
    },
  };
</script>
```

## Step

```html
<template>
  <tc-number-input :step="10" inline controls></tc-number-input>
</template>
```

## Inline

```html
<template>
  <tc-number-input placeholder="Inline input" inline controls></tc-number-input>
</template>
```

## Center number

```html
<template>
  <tc-number-input :value="0" inline center controls></tc-number-input>
</template>
```

## Sizes

```html
<template>
  <div>
    <tc-number-input placeholder="Small" size="small" inline controls></tc-number-input>
    <tc-number-input placeholder="Default" inline controls></tc-number-input>
    <tc-number-input placeholder="Large" size="large" inline controls></tc-number-input>
  </div>
</template>
```

## Without controls

```html
<template>
  <div>
    <tc-number-input placeholder="Small number input" size="small" inline></tc-number-input>
    <tc-number-input placeholder="Default number input" inline></tc-number-input>
    <tc-number-input placeholder="Large number input" size="large" inline></tc-number-input>
  </div>
</template>
```

## Readonly

```html
<template>
  <tc-number-input :value="1" inline controls readonly></tc-number-input>
</template>
```

## Disabled

```html
<template>
  <tc-number-input :value="0" inline controls disabled></tc-number-input>
</template>
```

## Props

All native attributes of the `<input type="number">` element are supported, and will be applied to the built-in input element.

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| center | `Boolean` | `false` | - | Indicates if the number is center or not. |
| controls | `Boolean` | `false` | - | Indicates if the controls is visible or not. |
| disabled | `Boolean` | `false` | - | Indicates if the component is disabled or not. |
| inline | `Boolean` | `false` | - | Indicates if the input is inline or not. |
| max | `Number` | `Infinity` | - | The maximum value. |
| min | `Number` | `-Infinity` | - | The minimum value. |
| name | `String` | - | - | The name for the built-in input element. |
| readonly | `Boolean` | `false` | - | Indicates if the component is readonly or not. |
| size | `String` | - | small, large | The size of the component. |
| step | `Number` | `1` | - | The increment of each step. |
| value | `Number` | - | - | The binding value. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(value)` | Fires when the value is changed. |
