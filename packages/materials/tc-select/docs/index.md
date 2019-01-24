# Select

## Basic usage

```html
<template>
  <div>
    <p>Selected value: {{ selectedValue }}</p>
    <tc-select :options="options" v-model="selectedValue"></tc-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedValue: '',
        options: ['Option 1', 'Option 2', 'Option 3'],
      };
    },
  };
</script>
```

## Advanced usage

```html
<template>
  <div>
    <p>Selected value: {{ selectedValue }}</p>
    <tc-select :options="options" v-model="selectedValue"></tc-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedValue: '',
        options: [
          {
            label: 'Option 1',
            value: 'Option 1',
          },
          {
            label: 'Option 2',
            value: 'Option 2',
            disabled: true,
          },
          {
            label: 'Option 3 (Group)',
            options: [
              {
                label: 'Option 3.1',
                value: 'Option 3.1',
              },
              {
                label: 'Option 3.2',
                value: 'Option 3.2',
                disabled: true,
              },
            ],
          },
          {
            label: 'Option 4',
            value: 'Option 4',
          },
          {
            label: 'Option 5 (Group)',
            disabled: true,
            options: [
              {
                label: 'Option 5.1',
                value: 'Option 5.1',
              },
              {
                label: 'Option 5.2',
                value: 'Option 5.2',
              },
            ],
          },
        ]
      };
    },
  };
</script>
```

## Inline

```html
<template>
  <div>
    <tc-select placeholder="Inline select" inline></tc-select>
    <tc-select placeholder="Another inline select" inline></tc-select>
  </div>
</template>
```

## Sizes

```html
<template>
  <div>
    <p>
      <tc-select placeholder="Small select" size="small"></tc-select>
    </p>
    <p>
      <tc-select placeholder="Default select"></tc-select>
    </p>
    <p>
      <tc-select placeholder="Large select" size="large"></tc-select>
    </p>
  </div>
</template>
```

## Disabled

```html
<template>
  <tc-select placeholder="Disabled select" disabled></tc-select>
</template>
```

## Props

All native attributes of the `<select>` element are supported.

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| inline | `Boolean` | `false` | - | Indicate if the select is inline (`display: inline-block`) or not. |
| options | `Array` | - | - | The data list for the select. |
| placeholder | `String` | - | - | Prepends an extra `<option>` into the select as placeholder. |
| size | `String` \| `Number` | - | small, large | The custom size of the select. Number values will be applied to native size attribute. |

The data object in-depth of the `options` property:

```js
[
  // Simple option, equals to: { value: '', selected: false, disabled: false }
  '',

  // Complete option
  {
    label: '',
    value: '',
    selected: false,
    disabled: false,
  },

  // Group of options
  {
    label: '',
    disabled: false,
    options: [],
  },
]
```

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(value)` | Fires when the value is changed. |
