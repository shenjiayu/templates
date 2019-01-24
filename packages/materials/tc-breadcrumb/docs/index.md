# Breadcrumb

## Examples

```html
<template>
  <div>
    <tc-breadcrumb>
      <tc-breadcrumb-item active>Home</tc-breadcrumb-item>
    </tc-breadcrumb>
    <tc-breadcrumb>
      <tc-breadcrumb-item to="/">Home</tc-breadcrumb-item>
      <tc-breadcrumb-item active>Components</tc-breadcrumb-item>
    </tc-breadcrumb>
    <tc-breadcrumb>
      <tc-breadcrumb-item to="/">Home</tc-breadcrumb-item>
      <tc-breadcrumb-item to="/components">Components</tc-breadcrumb-item>
      <tc-breadcrumb-item active>Breadcrumb</tc-breadcrumb-item>
    </tc-breadcrumb>
  </div>
</template>

<style scoped>
  .tc-breadcrumb + .tc-breadcrumb {
    margin-top: .5rem;
  }
</style>
```

## Custom separator

```html
<template>
  <tc-breadcrumb separator=">">
    <tc-breadcrumb-item to="/">Home</tc-breadcrumb-item>
    <tc-breadcrumb-item to="/components">Components</tc-breadcrumb-item>
    <tc-breadcrumb-item active>Breadcrumb</tc-breadcrumb-item>
  </tc-breadcrumb>
</template>
```

## Custom tags

```html
<template>
  <tc-breadcrumb tag="nav">
    <tc-breadcrumb-item to="/" tag="a">Home</tc-breadcrumb-item>
    <tc-breadcrumb-item to="/components" tag="a">Components</tc-breadcrumb-item>
    <tc-breadcrumb-item tag="a" active>Breadcrumb</tc-breadcrumb-item>
  </tc-breadcrumb>
</template>
```

## Props of Breadcrumb

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| separator | `String` | / | The separator for each item. |
| tag | `String` | `'ol'` | The element tag of the breadcrumb. |

## Props of Breadcrumb Item

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| active | `Boolean` | `false` | Indicates if the current item is active or not. |
| to | `String` \| `Object` | - | The target link (url or route) of the breadcrumb item. |
| tag | `String` | `'li'` | The element tag of the breadcrumb item. |
