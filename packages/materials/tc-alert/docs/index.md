# Alert

## Examples

```html
<template>
  <div>
    <tc-alert>Default</tc-alert>
    <tc-alert type="primary">Primary</tc-alert>
    <tc-alert type="secondary">Secondary</tc-alert>
    <tc-alert type="success">Success</tc-alert>
    <tc-alert type="danger">Danger</tc-alert>
    <tc-alert type="warning">Warning</tc-alert>
    <tc-alert type="info">Info</tc-alert>
    <tc-alert type="light">Light</tc-alert>
    <tc-alert type="dark">Dark</tc-alert>
  </div>
</template>

<style scoped>
  .tc-alert {
    margin-bottom: .5rem;
  }
</style>
```

## Links

```html
<template>
  <div>
    <tc-alert type="primary">A primary alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="secondary">A secondary alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="success">A success alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="danger">A danger alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="warning">A warning alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="info">A info alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="light">A light alert with
      <a href="#">link</a>.
    </tc-alert>
    <tc-alert type="dark">A dark alert with
      <a href="#">link</a>.
    </tc-alert>
  </div>
</template>

<style scoped>
  .tc-alert {
    margin-bottom: .5rem;
  }
</style>
```

## Closable

```html
<template>
  <div>
    <tc-alert type="primary" closable>Primary</tc-alert>
    <tc-alert type="secondary" closable>Secondary</tc-alert>
    <tc-alert type="success" closable>Success</tc-alert>
    <tc-alert type="danger" closable>Danger</tc-alert>
    <tc-alert type="warning" closable>Warning</tc-alert>
    <tc-alert type="info" closable>Info</tc-alert>
    <tc-alert type="light" closable>Light</tc-alert>
    <tc-alert type="dark" closable>Dark</tc-alert>
  </div>
</template>

<style scoped>
  .tc-alert {
    margin-bottom: .5rem;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| closable | `Boolean` | `false` | - | Indicates if the alert is closable or not. |
| type | `String` | - | primary, secondary, danger, warning, info, light, dark | The type of the alert. |
| tag | `String` | `'span'` | - | The element tag of the alert. |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| close | `()` | Close the alert. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| close | `()` | This event fires immediately when the `close` method is called. |
| closed | `()` | This event is fired when an alert element has been closed completely. |
