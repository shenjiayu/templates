# Badge

## Examples

```html
<template>
  <div>
    <tc-badge>Default</tc-badge>
    <tc-badge type="primary">Primary</tc-badge>
    <tc-badge type="secondary">Secondary</tc-badge>
    <tc-badge type="success">Success</tc-badge>
    <tc-badge type="danger">Danger</tc-badge>
    <tc-badge type="warning">Warning</tc-badge>
    <tc-badge type="info">Info</tc-badge>
    <tc-badge type="light">Light</tc-badge>
    <tc-badge type="dark">Dark</tc-badge>
  </div>
</template>
```

## Rounded

```html
<template>
  <div>
    <tc-badge type="primary" rounded>Primary</tc-badge>
    <tc-badge type="secondary" rounded>Secondary</tc-badge>
    <tc-badge type="success" rounded>Success</tc-badge>
    <tc-badge type="danger" rounded>Danger</tc-badge>
    <tc-badge type="warning" rounded>Warning</tc-badge>
    <tc-badge type="info" rounded>Info</tc-badge>
    <tc-badge type="light" rounded>Light</tc-badge>
    <tc-badge type="dark" rounded>Dark</tc-badge>
  </div>
</template>
```

## Links

```html
<template>
  <div>
    <tc-badge href="#" tag="a" type="primary">Primary</tc-badge>
    <tc-badge href="#" tag="a" type="secondary">Secondary</tc-badge>
    <tc-badge href="#" tag="a" type="success">Success</tc-badge>
    <tc-badge href="#" tag="a" type="danger">Danger</tc-badge>
    <tc-badge href="#" tag="a" type="warning">Warning</tc-badge>
    <tc-badge href="#" tag="a" type="info">Info</tc-badge>
    <tc-badge href="#" tag="a" type="light">Light</tc-badge>
    <tc-badge href="#" tag="a" type="dark">Dark</tc-badge>
  </div>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| rounded | `Boolean` | `false` | - | Indicates if the badge is rounded or not. |
| type | `String` | - | - | The type of the badge. |
| tag | `String` | `'span'` | primary, secondary, danger, warning, info, light, dark | The element tag of the badge. |
