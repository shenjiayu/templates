# Row

## Basic usage

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>1/2</tc-col>
      <tc-col>2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col>1/3</tc-col>
      <tc-col>2/3</tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-row {
    background-color: #f8f8f8;
    margin-bottom: .5rem;
    padding: .25rem;
  }

  .tc-col {
    background-color: #ddd;
    border: 1px solid #f8f8f8;
  }
</style>
```

## Gutters

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>
        <div>1/3</div>
      </tc-col>
      <tc-col>
        <div>2/3</div>
      </tc-col>
      <tc-col>
        <div>3/3</div>
      </tc-col>
    </tc-row>
    <tc-row :gutters="false">
      <tc-col>
        <div>1/3</div>
      </tc-col>
      <tc-col>
        <div>2/3</div>
      </tc-col>
      <tc-col>
        <div>3/3</div>
      </tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-row {
    background-color: #f8f8f8;
    margin-bottom: .5rem;
    padding: .25rem;
  }

  .tc-col {
    background-color: #ddd;
    border: 1px solid #f8f8f8;
  }

  .tc-col > * {
    background-color: #ccc;
  }
</style>
```

## Alignment

```html
<template>
  <tc-container>
    <tc-row align-items="start">
      <tc-col>1/3</tc-col>
      <tc-col>2/3</tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
    <tc-row align-items="center">
      <tc-col>1/3</tc-col>
      <tc-col>2/3</tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
    <tc-row align-items="end">
      <tc-col>1/3</tc-col>
      <tc-col>2/3</tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-row {
    background-color: #f8f8f8;
    margin-bottom: .5rem;
    min-height: 4rem;
    padding: .25rem;
  }

  .tc-col {
    background-color: #ddd;
    border: 1px solid #f8f8f8;
  }
</style>
```

## Nesting

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>1/3</tc-col>
      <tc-col>2/3
        <tc-row>
          <tc-col>1/2</tc-col>
          <tc-col>2/2</tc-col>
        </tc-row>
      </tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-row {
    background-color: #f8f8f8;
  }

  .tc-row .tc-row {
    background-color: #ddd;
  }

  .tc-col {
    border: 1px solid #eee;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| align-items | `String` | - | start, center, end | Specifies vertical alignment of the columns. |
| gutters | `Boolean` | `true` | - | Indicates if the row has `margin` and the child columns has `padding` or not. |
| justify-content | `String` | - | start, center, end, space-around, space-between | Specifies horizontal alignment of the columns. |
| tag | `String` | `'div'` | - | The element tag of the row. |
