# Input

## Basic usage

```html
<template>
  <div>
    <p>Input: {{ value }}</p>
    <tc-input placeholder="Please input..." v-model="value"></tc-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
      };
    },
  };
</script>
```

## Inline

```html
<template>
  <div>
    <tc-input placeholder="Inline input" inline></tc-input>
    <tc-input placeholder="Another inline input" inline></tc-input>
  </div>
</template>
```

## Sizes

```html
<template>
  <div>
    <p>
      <tc-input placeholder="Small input" size="small"></tc-input>
    </p>
    <p>
      <tc-input placeholder="Default input"></tc-input>
    </p>
    <p>
      <tc-input placeholder="Large input" size="large"></tc-input>
    </p>
  </div>
</template>
```

Use the native `size` attribute:

```html
<template>
  <div>
    <p>
      <tc-input placeholder="Short input" size="10" inline></tc-input>
    </p>
    <p>
      <tc-input placeholder="Default input" inline></tc-input>
    </p>
    <p>
      <tc-input placeholder="Long input" size="30" inline></tc-input>
    </p>
  </div>
</template>
```

## Readonly

```html
<template>
  <tc-input placeholder="Readonly input" readonly></tc-input>
</template>
```

## Disabled

```html
<template>
  <tc-input placeholder="Disabled input" disabled></tc-input>
</template>
```

## Input Group

### Examples

```html
<template>
  <div>
    <tc-input-group>
      <span>@</span>
      <tc-input placeholder="Username"></tc-input>
    </tc-input-group>
    <tc-input-group>
      <tc-input placeholder="Username"></tc-input>
      <span>@example.com</span>
    </tc-input-group>
    <tc-input-group>
      <span>$</span>
      <tc-input></tc-input>
      <span>.00</span>
    </tc-input-group>
    <tc-input-group>
      <span>$</span>
      <span>0.00</span>
      <tc-input></tc-input>
    </tc-input-group>
  </div>
</template>

<style scoped>
  .tc-input-group + .tc-input-group {
    margin-top: 1rem;
  }
</style>
```

### Sizes

```html
<template>
  <div>
    <tc-input-group size="small">
      <span>@</span>
      <tc-input placeholder="Username"></tc-input>
    </tc-input-group>
    <tc-input-group>
      <span>@</span>
      <tc-input placeholder="Username"></tc-input>
    </tc-input-group>
    <tc-input-group size="large">
      <span>@</span>
      <tc-input placeholder="Username"></tc-input>
    </tc-input-group>
  </div>
</template>

<style scoped>
  .tc-input-group + .tc-input-group {
    margin-top: 1rem;
  }
</style>
```

### Button addons

```html
<template>
  <tc-input-group tag="form">
    <tc-input name="q" placeholder="Search..." required></tc-input>
    <tc-button type="submit primary" icon="search">Search</tc-button>
    <tc-button type="submit info" icon="search" formaction="https://google.com/" formtarget="_blank">Search on Google</tc-button>
  </tc-input-group>
</template>

<style scoped>
  .tc-input-group + .tc-input-group {
    margin-top: 1rem;
  }
</style>
```

## Props of Input

All native attributes of the `<input>` element are supported.

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| inline | `Boolean` | `false` | - | Indicates if the input is inline (`display: inline-block`) or not. |
| size | `String` | - | small, large | The size of the input. |

## Events of Input

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(value)` | Fires when the value is changed. |

## Props of Input Group

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| size | `String` | - | small, large | The size of the input group. |
| tag | `String` | `'div'` | - | The tag of the input group. |
