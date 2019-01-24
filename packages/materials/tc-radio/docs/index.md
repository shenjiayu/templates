# Radio

## Basic usage

```html
<template>
  <div>
    <p>Checked value: {{ checkedValue }}</p>
    <tc-radio name="option" value="1" v-model="checkedValue">Option 1</tc-radio>
    <tc-radio name="option" value="2" v-model="checkedValue">Option 2</tc-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkedValue: '1',
      };
    },
  };
</script>
```

## Form submission

```html
<template>
  <form>
    <p>
      <tc-radio name="number" value="1" required>1</tc-radio>
      <tc-radio name="number" value="2" required>2</tc-radio>
    </p>
    <tc-button type="submit primary">Submit</tc-button>
  </form>
</template>
```

## Disabled

```html
<template>
  <div>
    <tc-radio disabled checked>Disabled option (checked)</tc-radio>
    <tc-radio disabled>Another disabled option</tc-radio>
  </div>
</template>
```

## Props

All native attributes of the `<input type="radio">` element are supported, and will be applied to the built-in input element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | `Boolean` | `false` | Indicates if the radio is checked or not. |
| disabled | `Boolean` | `false` | Indicates if the radio is disabled or not. |
| name | `String` | - | The name of the built-in radio input. |
| value | `String` \| `Number` \| `Boolean` | `'on'` | The value of the built-in radio input. |
