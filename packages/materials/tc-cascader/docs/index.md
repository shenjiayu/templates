# Cascader

## Basic usage

```html
<template>
  <tc-cascader :data="data" placeholder="Select"></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
            children: [
              {
                label: 'Option 1.1',
                value: 1,
                children: [
                  {
                    label: 'Option 1.1.1',
                    value: 1,
                  },
                  {
                    label: 'Option 1.1.2',
                    value: 2,
                  },
                ],
              },
              {
                label: 'Option 1.2',
                value: 2,
              },
              {
                label: 'Option 1.3',
                value: 3,
              },
            ],
          },
          {
            label: 'Option 2',
            value: 2,
            children: [
              {
                label: 'Option 2.1',
                value: 1,
              },
              {
                label: 'Option 2.2',
                value: 2,
              },
            ],
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
      };
    },
  };
</script>
```

## Advanced usage

```html
<template>
  <div>
    <p>Value: {{ value }}</p>
    <tc-cascader :data="data" placeholder="Select" @select="select" @change="change" v-model="value"></tc-cascader>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
            children: [
              {
                label: 'Option 1.1',
                value: 1,
                children: [
                  {
                    label: 'Option 1.1.1',
                    value: 1,
                  },
                  {
                    label: 'Option 1.1.2',
                    value: 2,
                  },
                ],
              },
              {
                label: 'Option 1.2',
                value: 2,
              },
              {
                label: 'Option 1.3',
                value: 3,
              },
            ],
          },
          {
            label: 'Option 2',
            value: 2,
            children: [
              {
                label: 'Option 2.1',
                value: 1,
              },
              {
                label: 'Option 2.2',
                value: 2,
              },
            ],
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
        value: [1, 1, 1],
      };
    },

    methods: {
      select(selectedValues) {
        console.log('select', selectedValues);
      },

      change(selectedValues) {
        console.log('change', selectedValues);
      },
    },
  };
</script>
```

## Inline

```html
<template>
  <tc-cascader :data="data" placeholder="Select" inline></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
      };
    },
  };
</script>
```

## Sizes

```html
<template>
  <div>
    <tc-cascader :data="data" placeholder="Select" size="small"></tc-cascader>
    <tc-cascader :data="data" placeholder="Select"></tc-cascader>
    <tc-cascader :data="data" placeholder="Select" size="large"></tc-cascader>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
            children: [
              {
                label: 'Option 1.1',
                value: 1,
              },
            ],
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .tc-cascader + .tc-cascader {
    margin-top: .5rem;
  }
</style>
```

## Clearable

```html
<template>
  <tc-cascader :data="data" :value="value" placeholder="Select" clearable></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
        value: [1],
      };
    },
  };
</script>
```

## Triggers

```html
<template>
  <div>
    <tc-cascader :data="data" placeholder="Default"></tc-cascader>
    <tc-cascader :data="data" placeholder="Change on select" change-trigger="select"></tc-cascader>
    <tc-cascader :data="data" placeholder="Expand on hover" expand-trigger="hover"></tc-cascader>
    <tc-cascader :data="data" placeholder="Change on select and select on hover" change-trigger="select" expand-trigger="hover"></tc-cascader>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
            children: [
              {
                label: 'Option 1.1',
                value: 1,
              },
              {
                label: 'Option 1.2',
                value: 2,
              },
            ],
          },
          {
            label: 'Option 2',
            value: 2,
            children: [
              {
                label: 'Option 2.1',
                value: 1,
              },
              {
                label: 'Option 2.2',
                value: 2,
              },
            ],
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .tc-cascader + .tc-cascader {
    margin-top: .5rem;
  }
</style>
```

## Lazy loading

```html
<template>
  <tc-cascader :data="data" placeholder="Select"></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
            children(callback) {
              setTimeout(() => {
                callback([
                  {
                    label: 'Option 1.1',
                    value: 1,
                    children: (callback) => {
                      setTimeout(() => {
                        callback([
                          {
                            label: 'Option 1.1.1',
                            value: 1,
                          },
                          {
                            label: 'Option 1.1.2',
                            value: 2,
                          },
                        ]);
                      }, 1000);
                    },
                  },
                  {
                    label: 'Option 1.2',
                    value: 2,
                  },
                ]);
              }, 1000);
            },
          },
          {
            label: 'Option 2',
            value: 2,
          },
        ],
      };
    },
  };
</script>
```

## Custom content

```html
<template>
  <tc-cascader :data="data" v-model="value" inline>
    <tc-button type="secondary" title="Choose your country" outline>
      <span v-if="country">{{ country.flag }} {{ country.label }}</span>
      <span v-else>Choose your country</span>
      <tc-icon type="chevron-down"></tc-icon>
    </tc-button>
  </tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            value: 'CN',
            label: 'China',
            flag: '🇨🇳',
          },
          {
            label: 'United States',
            value: 'US',
            flag: '🇺🇸',
          },
          {
            label: 'United Kingdom of Great Britain and Northern Ireland',
            value: 'GB',
            flag: '🇬🇧',
          },
        ],
        value: [],
      };
    },

    computed: {
      country() {
        let country;

        this.data.forEach((option) => {
          if (this.value.indexOf(option.value) !== -1) {
            country = option;
          }
        });

        return country;
      },
    },
  };
</script>
```

### Custom selected content

```html
<template>
  <tc-cascader :data="data" :value="value" placeholder="Select" :format="format"></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            value: 'CN',
            label: 'China',
            flag: '🇨🇳',
            children: [
              {
                label: 'Hong Kong',
                value: 'HK',
                flag: '🇭🇰',
              },
              {
                label: 'Macao',
                value: 'MO',
                flag: '🇲🇴',
              },
            ],
          },
          {
            label: 'United States',
            value: 'US',
            flag: '🇺🇸',
          },
          {
            label: 'United Kingdom of Great Britain and Northern Ireland',
            value: 'GB',
            flag: '🇬🇧',
          },
        ],
        value: ['CN', 'HK'],
      };
    },

    methods: {
      format(options) {
        const last = options.pop();

        return `${last.flag} ${last.label}`;
      },
    },
  };
</script>
```

### Custom option content

```html
<template>
  <tc-cascader :data="data" placeholder="Select"></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: this.render,
            value: 'CN',
            label: 'China',
            flag: '🇨🇳',
            children: [
              {
                content: this.render,
                label: 'Hong Kong',
                value: 'HK',
                flag: '🇭🇰',
              },
              {
                content: this.render,
                label: 'Macao',
                value: 'MO',
                flag: '🇲🇴',
              },
            ],
          },
          {
            content: this.render,
            label: 'United States',
            value: 'US',
            flag: '🇺🇸',
          },
          {
            content: this.render,
            label: 'United Kingdom of Great Britain and Northern Ireland',
            value: 'GB',
            flag: '🇬🇧',
          },
        ],
      };
    },

    methods: {
      render(createElement, current) {
        return createElement(
          'span',

          {
            attrs: {
              title: current.label,
            },

            class: 'custom-option-content',
          },

          [
            createElement('i', [current.flag]),
            createElement('span', [current.label]),
            createElement('small', [`(${current.value})`]),
          ],
        );
      },
    },
  };
</script>

<style scoped>
  .custom-option-content {
    display: flex;
  }

  .custom-option-content > i {
    font-style: normal;
    margin-right: .5rem;
  }

  .custom-option-content > span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .custom-option-content > small {
    color: #999;
    line-height: 1.5rem;
    margin-left: .5rem;
  }
</style>
```

## Filterable

```html
<template>
  <tc-cascader :data="data" placeholder="Select" clearable filterable></tc-cascader>
  <tc-cascader :data="data" placeholder="Change on select" clearable change-trigger="select" filterable></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
            children: [
              {
                label: 'Option 1.1',
                value: 1,
                children: [
                  {
                    label: 'Option 1.1.1',
                    value: 1,
                  },
                  {
                    label: 'Option 1.1.2',
                    value: 2,
                  },
                ],
              },
              {
                label: 'Option 1.2',
                value: 2,
              },
              {
                label: 'Option 1.3',
                value: 3,
              },
            ],
          },
          {
            label: 'Option 2',
            value: 2,
            children: [
              {
                label: 'Option 2.1',
                value: 1,
              },
              {
                label: 'Option 2.2',
                value: 2,
              },
            ],
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .tc-cascader + .tc-cascader {
    margin-top: .5rem;
  }
</style>
```

## Form submitting

```html
<template>
  <form @submit="submit">
    <fieldset>
      <label for="email">Select an email to display</label>
      <tc-cascader input-id="email" name="email" v-model="value" :data="data" placeholder="Select"></tc-cascader>
    </fieldset>
    <tc-button type="submit primary">Submit</tc-button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            value: 'foo@email.com',
          },
          {
            value: 'bar@email.com',
          },
          {
            value: 'baz@email.com',
          },
        ],
        value: [],
      };
    },

    methods: {
      submit(event) {
        if (this.value.length === 0) {
          event.preventDefault();
          this.$el.querySelector('#email').focus();
        }
      },
    },
  };
</script>

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
  <tc-cascader :data="data" :value="value" readonly></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
        value: [1],
      };
    },
  };
</script>
```

## Disabled

```html
<template>
  <div>
    <tc-cascader :data="data" placeholder="Select" :disabled="disabled" inline></tc-cascader>
    <tc-button :type="disabled ? 'success' : 'danger'" @click="toggle">{{ disabled ? 'Enable' : 'Disable' }}</tc-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
          },
        ],
        disabled: true,
      };
    },

    methods: {
      toggle() {
        this.disabled = !this.disabled;
      },
    },
  };
</script>
```

### Disabled option

```html
<template>
  <tc-cascader :data="data" placeholder="Select"></tc-cascader>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            label: 'Option 1',
            value: 1,
          },
          {
            label: 'Option 2',
            value: 2,
          },
          {
            label: 'Option 3',
            value: 3,
            disabled: true,
          },
        ],
      };
    },
  };
</script>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| change-trigger | `String` | `'change'` | change, select | How value is changed. |
| clearable | `Boolean` | `false` | - | Indicates if show the clear button when selected or not. |
| container | `String` \| `Element` | - | - | The container for placing the dropdown menu. String value is for [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector). |
| data | `Array` | - | - | The options data of the cascader. |
| debounce | `Number` | `300` | - | Debounce delay (milliseconds) when typing filter keyword. |
| disabled | `Boolean` | `false` | - | Indicates if the cascader is disabled or not. |
| expand-trigger | `String` | `'click'` | click, hover | How option is selected. |
| expanded | `Boolean` | `false` | - | Indicates if the dropdown menu is expanded or not. |
| filterable | `Boolean` | `false` | - | Indicates if the cascader is filterable or not. |
| format | `Function` | `(options) => options.map((option) => option.label | option.value)).join(' / ')` | - | Indicates if the dropdown menu is expanded or not. |
| inline | `Boolean` | `false` | - | Indicates if the cascader is inline or not. |
| input-id | `String` | - | - | The ID attribute for the built-in text input. |
| name | `String` | - | - | The name attribute for the built-in hidden input, used for form submitting. |
| placeholder | `String` | - | - | The placeholder for the inbuilt input element. |
| readonly | `Boolean` | `false` | - | Indicates if the cascader is read only or not. |
| size | `String` | - | small, large  | The size of the cascader. |
| value | `Array` | - | - | The value(s) of the cascader. |

The data object in-depth for option:

```js
{
  /**
   * The content of the option.
   * The content can be text, HTML, render function or component.
   * If not specified, the `label` will be used as the content.
   * @type {string|Function|Object}
   * @example
   * {
   *   template: '<p>option content</p>'
   * }
   * @example
   * function (createElement, currentOption, parentOption, rootOption) {
   *   return createElement('p', ['option content]);
   * }
   */
  content: 'option content',

  /**
   * The label of the option.
   * If not specified, the `value` will be used as the label.
   * @type {string|number}
   */
  label: 'option label',

  /**
   * The value of the option.
   * @type {*}
   */
  value: 'option value',

  /**
   * The children of the option.
   * @type {Array|Function}
   * @example
   * function (callback) {
   *   setTimeout(() => {
   *     callback([
   *       {
   *          label: 'Option 1',
   *          value: 1,
   *       },
   *       {
   *          label: 'Option 2',
   *          value: 2,
   *       },
   *     ]);
   *   }, 1000);
   * }
   */
  children: [],

  /**
   * Indicate if the option is disabled or not.
   * @type {boolean}
   * @default false
   */
  disabled: true,
}
```

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| select | `(newValue, oldValue)` | This event fires when an option is selected. |
| change | `(newValue, oldValue)` | This event fires when the end option in the cascading list is selected. |
