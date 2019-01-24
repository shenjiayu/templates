# Switch

> Another form of checkbox.

## Basic usage

```html
<template>
  <div>
    <p>Checked: {{ checked }}</p>
    <tc-switch label="Check this switch" v-model="checked"></tc-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
      };
    },
  };
</script>
```

## Custom colors

```html
<template>
  <tc-switch color="red" checked-color="green"></tc-switch>
</template>
```

## Additional labels

```html
<template>
  <tc-switch label="Label" checked-label="Checked label"></tc-switch>
</template>
```

## Disabled

```html
<template>
  <div>
    <tc-switch disabled></tc-switch>
    <tc-switch checked disabled></tc-switch>
  </div>
</template>
```

## Props

All native attributes of the `<input type="checkbox">` element are supported, and will be applied to the built-in input element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| color | `String` | - | The background color of the switch. |
| checked-color | `String` | - | The background color of the switch when it is checked. |
| label | `String` | - | The label shown in the left side of the switch. |
| checked-label | `String` | - | The label shown in the right side of the switch. |
| checked | `Boolean` | `false` | Indicates if the checkbox is checked or not. |
| disabled | `Boolean` | `false` | Indicates if the checkbox is disabled or not. |
| name | `String` | - | The name of the built-in checkbox input. |
| value | `String` \| `Number` \| `Boolean` | `'on'` | The value of the built-in checkbox input. |
