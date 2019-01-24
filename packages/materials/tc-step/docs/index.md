# Step

## Basic usage

```html
<template>
  <div>
    <tc-step>
      <tc-step-item></tc-step-item>
      <tc-step-item></tc-step-item>
      <tc-step-item></tc-step-item>
    </tc-step>
    <tc-step :current-step="2">
      <tc-step-item></tc-step-item>
      <tc-step-item></tc-step-item>
      <tc-step-item></tc-step-item>
    </tc-step>
    <tc-step :current-step="2">
      <tc-step-item text="Finished">Step description.</tc-step-item>
      <tc-step-item text="Processing">Step description.</tc-step-item>
      <tc-step-item text="Pending">Step description.</tc-step-item>
    </tc-step>
  </div>
</template>

<style scoped>
  .tc-step + .tc-step {
    margin-top: 1rem;
  }
</style>
```

## Advanced usage

```html
<template>
  <div>
    <tc-step ref="step" v-model="currentStep">
      <tc-step-item text="Finished"></tc-step-item>
      <tc-step-item text="Processing"></tc-step-item>
      <tc-step-item text="Pending"></tc-step-item>
    </tc-step>
    <p>Current step: {{ currentStep }}</p>
    <tc-button type="primary" size="small" @click="prev">Prev</tc-button>
    <tc-button type="primary" size="small" @click="next">Next</tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentStep: 2,
      };
    },

    methods: {
      prev() {
        this.$refs.step.prev(true);
      },

      next() {
        this.$refs.step.next(true);
      },
    },
  };
</script>

<style scoped>
  p {
    margin-top: 1rem;
  }
</style>
```

## Custom statuses

```html
<template>
  <tc-step :current-step="2" current-status="success">
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
  </tc-step>
  <tc-step :current-step="2" current-status="error">
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
  </tc-step>
  <tc-step :current-step="2" finished-status="success">
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
  </tc-step>
  <tc-step :current-step="2" finished-status="error">
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
  </tc-step>
  <tc-step :current-step="2" pending-status="finish">
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
  </tc-step>
  <tc-step :current-step="2" pending-status="error">
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
    <tc-step-item></tc-step-item>
  </tc-step>
  <tc-step :current-step="5">
    <tc-step-item status="finish"></tc-step-item>
    <tc-step-item status="success"></tc-step-item>
    <tc-step-item status="error"></tc-step-item>
    <tc-step-item status="process"></tc-step-item>
    <tc-step-item status="wait"></tc-step-item>
  </tc-step>
</template>

<style scoped>
  .tc-step + .tc-step {
    margin-top: 1rem;
  }
</style>
```

## Custom signs

```html
<template>
  <tc-step>
    <tc-step-item sign="A"></tc-step-item>
    <tc-step-item sign="B"></tc-step-item>
    <tc-step-item sign="C"></tc-step-item>
  </tc-step>
</template>
```

## Custom icons

```html
<template>
  <tc-step :current-step="2">
    <tc-step-item icon="user-plus" text="Sign Up"></tc-step-item>
    <tc-step-item icon="camera" text="Upload Avatar"></tc-step-item>
    <tc-step-item icon="mail" text="Verify Email"></tc-step-item>
  </tc-step>
</template>
```

## Vertical alignment

```html
<template>
  <tc-step :current-step="2" vertical>
    <tc-step-item text="Finished">Step description.</tc-step-item>
    <tc-step-item text="Processing">Step description.</tc-step-item>
    <tc-step-item text="Pending">Step description.</tc-step-item>
  </tc-step>
</template>
```

## Step Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| current-step | `Number` | `1` | - | The step number of the current step item which is processing. |
| current-Status | `String`| `'process'` | finish, success, error, process, wait | The status of the current step item. |
| finished-status | `String` | `'finish'` | finish, success, error, process, wait | The status for the finished step items. |
| pending-status | `String` | `'wait'` | finish, success, error, process, wait | The status for the pending step items. |
| vertical | `Boolean` | `false` | - | Show step items in vertical direction. |
| tag | `String` | `'ol'` | - | The element tag of the step. |

## Step Methods

| Name | Parameters | Description |
| --- | --- | --- |
| prev | `(loop = false)` | Navigate to the previous step. |
| next | `(loop = false)` | Navigate to the next step. |

## Step Item Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| icon | `String` | - | - | The custom icon for the step item. |
| sign | `Number` \| `String` | - | - | The step number of the step item. |
| text | `String` | - | - | The title text of the step item. |
| status | `String` | - | finish, success, error, process, wait | The status of the step item. |
| tag | `String` | li | - | The element tag of the step item. |
