# Rate

## Basic usage

```html
<template>
  <div>
    <tc-rate :value="1.25"></tc-rate>
    <tc-rate :value="2.5"></tc-rate>
    <tc-rate :value="3.75"></tc-rate>
  </div>
</template>
```

## Advanced usage

```html
<template>
  <tc-rate change-trigger="hover" v-model="value" tooltip>{{ value }} point(s)</tc-rate>
</template>

<script>
  export default {
    data() {
      return {
        value: 2.5,
      };
    },
  };
</script>
```

## Colors

```html
<template>
  <div>
    <tc-rate :value="2.5" color="#ff4136" block>Red</tc-rate>
    <tc-rate :value="2.5" color="#2ecc40" block>Green</tc-rate>
    <tc-rate :value="2.5" color="#0074d9" block>Blue</tc-rate>
  </div>
</template>

<style scoped>
  .tc-rate + .tc-rate {
    margin-top: .5rem;
  }
</style>
```

### Dynamic colors

```html
<template>
  <tc-rate :color="color" v-model="value">2.5 point(s)</tc-rate>
</template>

<script>
  export default {
    data() {
      return {
        value: 2.5,
      };
    },

    methods: {
      color(value) {
        if (value > 4) {
          return '#3d9970';
        } else if (value > 3) {
          return '#2ecc40';
        } else if (value > 2) {
          return '#39cccc';
        } else if (value > 1) {
          return '#ff851b';
        } else {
          return '#ff4136';
        }
      },
    },
  };
</script>
```

## Icons

```html
<template>
  <div>
    <tc-rate :value="2.5" icon="heart" block></tc-rate>
    <tc-rate :value="2.5" icon="award" block></tc-rate>
    <tc-rate :value="2.5" icon="sun" block></tc-rate>
  </div>
</template>

<style scoped>
  .tc-rate + .tc-rate {
    margin-top: .5rem;
  }
</style>
```

### Dynamic icons

```html
<template>
  <tc-rate :icon="icon" v-model="value"></tc-rate>
</template>

<script>
  export default {
    data() {
      return {
        value: 2.5,
      };
    },

    methods: {
      icon(value, itemValue = 0) {
        if (itemValue <= value) {
          if (value > 4) {
            return 'sun';
          } else if (value > 3) {
            return 'cloud';
          } else if (value > 2) {
            return 'cloud-lightning';
          } else if (value > 1) {
            return 'cloud-drizzle';
          } else {
            return 'cloud-rain';
          }
        }

        return 'sun';
      },
    },
  };
</script>
```

## Tooltip

```html
<template>
  <tc-rate tooltip></tc-rate>
</template>
```

### Custom tooltip contents

```html
<template>
  <tc-rate :tooltip="tooltip"></tc-rate>
</template>

<script>
  export default {
    methods: {
      tooltip(value, itemValue) {
        switch (itemValue) {
          case 5:
            return 'Great';

          case 4:
            return 'Good';

          case 3:
            return 'Normal';

          case 2:
            return 'Bad';

          case 1:
            return 'Oops';

          default:
            return itemValue;
        }
      },
    },
  };
</script>
```

## More items

```html
<template>
  <tc-rate :max="100" :step="10" :value="50"></tc-rate>
</template>
```

## Sizes

```html
<template>
  <div>
    <tc-rate :value="2.5" :size="16" block>2.5 point(s)</tc-rate>
    <tc-rate :value="2.5" block>2.5 point(s)</tc-rate>
    <tc-rate :value="2.5" :size="32" block>2.5 point(s)</tc-rate>
  </div>
</template>

<style scoped>
  .tc-rate + .tc-rate {
    margin-top: .5rem;
  }
</style>
```

## Form submitting

```html
<template>
  <form>
    <fieldset>
      <label>Please rate for the movie</label>
      <tc-rate name="point" tooltip block></tc-rate>
    </fieldset>
    <tc-button type="submit primary">Submit</tc-button>
  </form>
</template>

<style scoped>
  fieldset {
    border: 0;
    display: block;
    margin-bottom: 1rem;
    padding: 0;
  }

  fieldset > label {
    display: inline-block;
    margin-bottom: .25rem;
  }
</style>
```

## Readonly

```html
<template>
  <tc-rate :value="2.5" readonly></tc-rate>
</template>
```

## Disabled

```html
<template>
  <tc-rate :value="2.5" disabled></tc-rate>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| block | `Boolean` | `false` | - | Indicates if the rate is block or not. |
| color | `String` \| `Function` | - | - | The color for the active item(s). |
| disabled | `Boolean` | `false` | - | Indicates if the rate is disabled or not. |
| icon | `String` \| `Function` | `'star'` | (See [Icon](/#/components/icon) component) | The icon for the item(s). |
| max | `Number` | `5` | - | The max value of the rate. |
| min | `Number` | `0` | - | The min value of the rate. |
| name | `String` | - |  - |The name for the built-in `<input type="range">`. |
| readonly | `Boolean` | `false` | - | Indicates if the rate is readonly or not. |
| size | `Number` \| `String` | `1.5rem` | - | Specify the size of the icons and the font size of the text. If the value is a number, the default unit (`px`) will be applied. |
| step | `Number` | `1` | - | The increment for the rate. |
| tag | `String` | `'div'` | - | The tag of the rate element. |
| tooltip | `Boolean` \| `Function` | `false` | - | Indicates if show a tooltip on the item when hover or not. |
| value | `Number` | `0` | - | The value of the rate. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| input | `(newValue, oldValue)` | This event is emitted immediately when pointer enter or leave one item. |
| change | `(newValue, oldValue)` | This event is emitted when click one item. |
