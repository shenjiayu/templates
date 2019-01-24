# Textarea

## Basic usage

```html
<template>
  <div>
    <p>Input: {{ text }}</p>
    <tc-textarea placeholder="Please input text..." v-model="text"></tc-textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      };
    },
  };
</script>
```

## Rows

Set a range of rows to adjust the textarea height automatically when input.

- Array syntax: `[minRows, maxRows]`.
- The default minimum rows is `1`.
- The default maximum rows is `Infinity`.

```html
<template>
  <div>
    <p>
      <tc-textarea :rows="1"></tc-textarea>
    </p>
    <p>
      <tc-textarea :rows="[1,3]"></tc-textarea>
    </p>
    <p>
      <tc-textarea :rows="[1,]"></tc-textarea>
    </p>
    <p>
      <tc-textarea :rows="[,3]"></tc-textarea>
    </p>
  </div>
</template>
```

## Readonly

```html
<template>
  <tc-textarea placeholder="Readonly textarea" readonly></tc-textarea>
</template>
```

## Disabled

```html
<template>
  <tc-textarea placeholder="Disabled textarea" disabled></tc-textarea>
</template>
```

## Props

All native attributes of the `<textarea>` element are supported.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| rows | `Number` \| `Array` | `2` | The rows of the textarea. |
| value | `String` | - | The value or text content of the textarea. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(value)` | Fires when the value is changed. |
