# Checkbox

## Basic usage

```html
<template>
  <div>
    <p>Checked: {{ checked }}</p>
    <tc-checkbox v-model="checked">Check this checkbox</tc-checkbox>
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

## Multiple

```html
<template>
  <div>
    <p>Checked values: {{ checkedValues }}</p>
    <tc-checkbox name="option" value="1" v-model="checkedValues">Option 1</tc-checkbox>
    <tc-checkbox name="option" value="2" v-model="checkedValues">Option 2</tc-checkbox>
    <tc-checkbox name="option" value="3" v-model="checkedValues">Option 3</tc-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkedValues: ['1'],
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
      <tc-checkbox name="number" value="1" required>1</tc-checkbox>
      <tc-checkbox name="number" value="2">2</tc-checkbox>
    </p>
    <tc-button type="submit primary">Submit</tc-button>
  </form>
</template>
```

## Indeterminate state

```html
<template>
  <div>
    <p>
      <tc-checkbox :indeterminate="indeterminate">Check this checkbox</tc-checkbox>
    </p>
    <tc-button type="primary" @click="toggle">Toggle indeterminate state</tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indeterminate: true,
      };
    },

    methods: {
      toggle() {
        this.indeterminate = !this.indeterminate;
      },
    },
  };
</script>
```

## Disabled

```html
<template>
  <div>
    <tc-checkbox disabled checked>Disabled option (checked)</tc-checkbox>
    <tc-checkbox disabled>Another disabled option</tc-checkbox>
  </div>
</template>
```

## Props

All native attributes of the `<input type="checkbox">` element are supported, and will be applied to the built-in input element.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| checked | `Boolean` | `false` | Indicates if the checkbox is checked or not. |
| disabled | `Boolean` | `false` | Indicates if the checkbox is disabled or not. |
| indeterminate | `Boolean` | `false` | Indicates if the checkbox is indeterminate or not. |
| name | `String` | - | The name of the built-in checkbox input. |
| value | `String` \| `Number` \| `Boolean` \| `Array` | `'on'` | The value of the built-in checkbox input. |
