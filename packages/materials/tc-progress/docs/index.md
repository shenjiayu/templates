# Progress

## Basic usage

```html
<template>
  <div>
    <tc-progress></tc-progress>
    <tc-progress :value=".25"></tc-progress>
    <tc-progress :value=".5"></tc-progress>
    <tc-progress :value=".75"></tc-progress>
    <tc-progress :value="1"></tc-progress>
  </div>
</template>

<style scoped>
  .tc-progress + .tc-progress {
    margin-top: 1rem;
  }
</style>
```

## Advanced usage

```html
<template>
  <div>
    <tc-progress :value="value" :max="max" percentage></tc-progress>
    <p>Current value: {{ value }}</p>
    <tc-button type="primary" size="small" icon="minus" @click="decrease"></tc-button>
    <tc-button type="primary" size="small" icon="plus"  @click="increase"></tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 50,
        max: 100,
      };
    },

    methods: {
      decrease() {
        this.value = Math.max(this.value - 10, 0);
      },

      increase() {
        this.value = Math.min(this.value + 10, this.max);
      },
    },
  };
</script>

<style scoped>
  .tc-progress {
    margin-bottom: 1rem;
  }
</style>
```

## Percentage

```html
<template>
  <tc-progress :value=".5" percentage></tc-progress>
</template>
```

## Heights

```html
<template>
  <div>
    <tc-progress :value=".5" style="height: 1px;"></tc-progress>
    <tc-progress :value=".5" style="height: .5rem;"></tc-progress>
    <tc-progress :value=".5" style="height: 2rem;" percentage></tc-progress>
  </div>
</template>

<style scoped>
  .tc-progress + .tc-progress {
    margin-top: 1rem;
  }
</style>
```

## Backgrounds

```html
<template>
  <div>
    <tc-progress :value=".2"></tc-progress>
    <tc-progress :value=".4" type="success"></tc-progress>
    <tc-progress :value=".6" type="warning"></tc-progress>
    <tc-progress :value=".8" type="danger"></tc-progress>
    <tc-progress :value="1" type="info"></tc-progress>
  </div>
</template>

<style scoped>
  .tc-progress + .tc-progress {
    margin-top: 1rem;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| max | `Number` | `1` | - | The max value of the progress. |
| value | `String` | `0` | - | The current value of the progress. |
| percentage | `Boolean` | `false` | - | Show percentage text within the progress bar. |
| type | `String` | - | success, warning, danger, info | The status type of the progress. |
| tag | `String` | `'div'` | - | The element tag of the progress. |
