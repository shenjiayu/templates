# Col

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
    <tc-row>
      <tc-col>1/3</tc-col>
      <tc-col :span="8">2/3</tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
    <tc-row>
      <tc-col :span="2">1/3</tc-col>
      <tc-col :span="4">2/3</tc-col>
      <tc-col :span="6">3/3</tc-col>
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

## Responsive

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>1/2</tc-col>
      <tc-col>2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col>1/2</tc-col>
      <tc-col span="auto">2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col span="sm">1/2</tc-col>
      <tc-col span="sm">2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col span="sm">1/2</tc-col>
      <tc-col span="sm-auto">2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col span="sm md-8 lg-9 xl-10">1/2</tc-col>
      <tc-col span="sm md-4 lg-3 xl-2">2/2</tc-col>
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

## Offsetting

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>1/2</tc-col>
      <tc-col :offset="2">2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col>1/2</tc-col>
      <tc-col :offset="4">2/2</tc-col>
    </tc-row>
    <tc-row>
      <tc-col :span="2">1/2</tc-col>
      <tc-col :span="2" offset="auto">2/2</tc-col>
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
  }
</style>
```

## Reordering

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col :order="2">1/3</tc-col>
      <tc-col :order="1">2/3</tc-col>
      <tc-col>3/3</tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-row {
    background-color: #f8f8f8;
    padding: .25rem;
  }

  .tc-col {
    background-color: #ddd;
    margin: 1px;
  }
</style>
```

## Alignment

### Horizontal alignment

```html
<template>
  <tc-container>
    <tc-row justify-content="start">
      <tc-col :span="4">1/2</tc-col>
      <tc-col :span="4">2/2</tc-col>
    </tc-row>
    <tc-row justify-content="center">
      <tc-col :span="4">1/2</tc-col>
      <tc-col :span="4">2/2</tc-col>
    </tc-row>
    <tc-row justify-content="end">
      <tc-col :span="4">1/2</tc-col>
      <tc-col :span="4">2/2</tc-col>
    </tc-row>
    <tc-row justify-content="space-around">
      <tc-col :span="4">1/2</tc-col>
      <tc-col :span="4">2/2</tc-col>
    </tc-row>
    <tc-row justify-content="space-between">
      <tc-col :span="4">1/2</tc-col>
      <tc-col :span="4">2/2</tc-col>
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

### Vertical alignment

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col align-self="start">1/2</tc-col>
      <tc-col align-self="center">2/2</tc-col>
      <tc-col align-self="end">2/2</tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-row {
    background-color: #f8f8f8;
    margin-bottom: .5rem;
    min-height: 5.5rem;
    padding: .25rem;
  }

  .tc-col {
    background-color: #ddd;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| align-self | `String` | - | start, center, end | - |
| offset | `Number` \| `String` | - | sm, md, lg, xl \| 1, 2, 3, ..., 12 \| auto | The left offset of the column. |
| order | `Number` \| `String` | - | sm, md, lg, xl \| 1, 2, 3, ..., 12 \| auto | The order of the column. |
| span | `Number` \| `String` | - | sm, md, lg, xl \| 1, 2, 3, ..., 12 \| auto | The width of the column. |
| tag | `String` | `'div'` | - | The element tag of the col. |
