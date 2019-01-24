# Tag

## Examples

```html
<template>
  <div>
    <tc-tag type="primary">primary</tc-tag>
    <tc-tag type="secondary">secondary</tc-tag>
    <tc-tag type="success">success</tc-tag>
    <tc-tag type="danger">danger</tc-tag>
    <tc-tag type="warning">warning</tc-tag>
    <tc-tag type="info">info</tc-tag>
    <tc-tag type="light">light</tc-tag>
    <tc-tag type="dark">dark</tc-tag>
  </div>
</template>

<style scoped>
  .tc-tag {
    margin-right: .5rem;
  }
</style>
```

## Size

```html
<template>
  <div>
    <tc-tag type="primary" size="sm">small</tc-tag>
    <tc-tag type="primary" size="md">middle</tc-tag>
    <tc-tag type="primary" size="lg">large</tc-tag>
  </div>
</template>

<style scoped>
  .tc-tag {
    margin-right: .5rem;
  }
</style>
```

## closable

```html
<template>
  <div>
    <tc-tag
      type="primary"
      v-for="(tag, index) in tags"
      :visible="tag"
      closable
      :key="index"
      @close="close(index)"
    >
      Tag {{index}}
    </tc-tag>
  </div>
</template>

<style scoped>
  .tc-tag {
    margin-right: .5rem;
  }
</style>

<script>
  export default {
    data() {
      return {
        tags: {
          0: true,
          1: true,
          2: true,
        }
      }
    },
    methods: {
      close(index) {
        this.tags[index] = false
      }
    }
  }
</script>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| closable | `Boolean` | `false` | - | Indicates if the Tag is closable or not. |
| type | `String` | - | primary, secondary, danger, warning, info, light, dark | The type of the alert. |
| tag | `String` | `'span'` | - | The element tag of the alert. |
| size | `String` | md | `sm, md, lg` | The size of tag component |
| visible | `Boolean` | true | `false` | is show the tag |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| close | `()` | Fire the close event. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| close | `()` | This event fires immediately when the close button clicked |
| closed | `()` | This event is fired when an tag element has been closed completely. |
