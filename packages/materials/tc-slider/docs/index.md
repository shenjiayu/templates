# Slider

## Usage

```html
<template>
  <div>
    <p>Current value: {{ value }}</p>
    <tc-slider v-model="value"></tc-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 50,
      };
    },
  };
</script>
```

## Range

```html
<template>
  <div>
    <tc-slider :value="[0, 50]"></tc-slider>
    <tc-slider :value="[25, 75]"></tc-slider>
    <tc-slider :value="[50, 100]"></tc-slider>
  </div>
</template>
```

## Readonly

```html
<template>
  <div>
    <tc-slider :value="50" readonly></tc-slider>
    <tc-slider :value="[25, 75]" readonly></tc-slider>
  </div>
</template>
```

## Disabled

```html
<template>
  <div>
    <tc-slider :value="50" disabled></tc-slider>
    <tc-slider :value="[25, 75]" disabled></tc-slider>
  </div>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `String` | - | The name for the built-in `<input type="range">`. |
| value | `Number` \| `Array` | `0` | The value of the slider. |
| max | `Number` | `100` | The max value of the slider. |
| min | `Number` | `0` | The min value of the slider. |
| step | `Number` | `1` | The increment for the slider when step up or down. |
| readonly | `Boolean` | `false` | Indicates if the slider is readonly or not. |
| disabled | `Boolean` | `false` | Indicates if the slider is disabled or not. |
| tag | `String` | `'div'` | The tag of the slider element. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| input | `(newValue, oldValue)` | This event is emitted immediately when the slide button is moved by one step. |
| change | `(newValue, oldValue)` | This event is emitted when the slide button is released. |
