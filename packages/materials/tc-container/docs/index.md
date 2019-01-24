# Container

## Examples

```html
<template>
  <div>
    <tc-container>Container</tc-container>
    <tc-container fluid>Container with full width</tc-container>
    <tc-container tag="section">Container with custom tag</tc-container>
  </div>
</template>

<style scoped>
  .tc-container {
    background-color: #f8f8f8;
    margin-bottom: .5rem;
  }
</style>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| fluid | `Boolean` | `false` | Indicates if the container has full width or not (fixed width by default). |
| tag | `String` | `'div'` | The element tag of the container. |
