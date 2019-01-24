# Table

## Examples

```html
<template>
  <div>
    <tc-table :data="table1"></tc-table>
    <tc-table :data="table2"></tc-table>
    <tc-table :data="table3"></tc-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        table1: [
          ['Table cell', 'Table cell', 'Table cell'],
          ['Table cell', 'Table cell', 'Table cell'],
          ['Table cell', 'Table cell', 'Table cell'],
        ],
        table2: [
          {
            cell0: 'Table cell',
            cell1: 'Table cell',
            cell2: 'Table cell',
          },
          {
            cell0: 'Table cell',
            cell1: 'Table cell',
            cell2: 'Table cell',
          },
          {
            cell0: 'Table cell',
            cell1: 'Table cell',
            cell2: 'Table cell',
          },
        ],
        table3: [
          {
            tag: 'thead',
            rows: [
              ['Table header cell', 'Table header cell', 'Table header cell'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Table body cell', 'Table body cell', 'Table body cell'],
            ],
          },
          {
            tag: 'tfoot',
            rows: [
              ['Table footer cell', 'Table footer cell', 'Table footer cell'],
            ],
          },
        ]
      };
    },
  };
</script>
```

## Striped

```html
<template>
  <tc-table :data="data" striped></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

## Bordered

```html
<template>
  <tc-table :data="data" bordered></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

## Hoverable

```html
<template>
  <tc-table :data="data" hoverable></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

## Responsive

Make the table content scrollable in extra small viewport.

```html
<template>
  <tc-table :data="data" responsive></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content', 'Content', 'Content'],
            ],
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
    <tc-table :data="data" size="small" bordered></tc-table>
    <tc-table :data="data" bordered></tc-table>
    <tc-table :data="data" size="large" bordered></tc-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

## Sorting

```html
<template>
  <div>
    <tc-table :data="data"></tc-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              [
                'Heading',
                {
                  content: 'Heading',
                  sortable: true,
                },
                {
                  content: 'Heading',
                  sortable: true,
                },
              ],
            ],
          },
          ['Content 1', 'Content 2', 'Content 3'],
          ['Content 2', 'Content 3', 'Content 1'],
          ['Content 3', 'Content 1', 'Content 2'],
        ],
      };
    },
  };
</script>
```

## Selectable

### Single

```html
<template>
  <tc-table :data="data" selectable></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

### Multiple

```html
<template>
  <tc-table :data="data" selectable multiple></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

### Controls

```html
<template>
  <div>
    <tc-table :data="data" hoverable selectable controls></tc-table>
    <tc-table :data="data" hoverable selectable multiple controls></tc-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

### Selected

```html
<template>
  <div>
    <p>Selected rows: {{ selectedRows }}</p>
    <tc-table :data="data" v-model="selectedRows" hoverable selectable controls></tc-table>
    <tc-table :data="data" :selected-rows="selectedRows" hoverable selectable multiple controls></tc-table>
  </div>
</template>

<script>
  export default {
    data() {
      const rows = [
        ['Content 1', 'Content 1', 'Content 1'],
        ['Content 2', 'Content 2', 'Content 2'],
        ['Content 3', 'Content 3', 'Content 3'],
      ];

      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows,
          },
        ],
        selectedRows: rows.slice(1, 2),
      };
    },
  };
</script>
```

### Disabled

```html
<template>
  <tc-table :data="data" :disabled-rows="data[1].rows.slice(1, 2)" hoverable selectable></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

## Editing

```html
<template>
  <tc-table :data="normalizedData" responsive></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            email: 'foo@mail.eg',
            primary: true,
            public: true,
          },
          {
            email: 'bar@mail.eg',
            primary: false,
            public: false,
          },
          {
            email: 'baz@mail.eg',
            primary: false,
            public: false,
          },
        ],
      };
    },

    computed: {
      normalizedData() {
        const { data } = this;
        const rows = [];

        data.forEach((row, index) => {
          rows.push({
            email: row.email,
            primary: row.primary ? 'Yes' : 'No',
            public: row.public ? 'Yes' : 'No',
            actions: createElement => createElement(
              'div',
              {
                style: {
                  whiteSpace: 'nowrap',
                },
              },
              [
                createElement(
                  'tc-button',
                  {
                    props: {
                      size: 'small',
                      type: row.primary ? 'secondary' : 'primary',
                      disabled: row.primary,
                    },
                    on: {
                      click() {
                        data.forEach((row, i) => {
                          row.primary = i === index;
                        });
                      },
                    },
                  },
                  ['Set as primary'],
                ),
                createElement(
                  'tc-button',
                  {
                    props: {
                      size: 'small',
                      type: row.public ? 'success' : 'warning',
                    },
                    style: {
                      marginLeft: '.5rem',
                    },
                    on: {
                      click() {
                        row.public = !row.public;
                      },
                    },
                  },
                  [`Set as ${row.public ? 'private' : 'public'}`],
                ),
                createElement(
                  'tc-button',
                  {
                    props: {
                      size: 'small',
                      type: row.primary ? 'secondary' : 'danger',
                      disabled: row.primary,
                    },
                    style: {
                      marginLeft: '.5rem',
                    },
                    on: {
                      click() {
                        data.splice(index, 1);
                      },
                    },
                  },
                  ['Delete'],
                ),
              ],
            ),
          });
        });

        return [
          {
            tag: 'thead',
            rows: [Object.keys(rows[0])],
          },
          {
            tag: 'tbody',
            rows,
          },
        ];
      },
    },
  };
</script>
```

## Caption

```html
<template>
  <tc-table :caption="caption" :data="data"></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        caption: 'Table caption',
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content'],
            ],
          },
        ],
      };
    },
  };
</script>
```

## Colgroup

```html
<template>
  <tc-table :colgroup="colgroup" :data="data"></tc-table>
</template>

<script>
  export default {
    data() {
      return {
        colgroup: [
          {
            span: 1,
            style: {
              backgroundColor: '#f5c6cb',
            },
          },
          {
            span: 2,
            style: {
              backgroundColor: '#c3e6cb',
            },
          },
          {
            span: 1,
            style: 'background-color: #b8daff',
          }
        ],
        data: [
          {
            tag: 'thead',
            rows: [
              ['Heading', 'Heading', 'Heading', 'Heading'],
            ],
          },
          {
            tag: 'tbody',
            rows: [
              ['Content', 'Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content', 'Content'],
              ['Content', 'Content', 'Content', 'Content'],
            ],
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
| bordered | `Boolean` | `false` | - | Indicate if add borders on all sides of the table and cells or not. |
| caption | `String` | - | - | The text content for the `<caption>` element. |
| colgroup | `Array` | - | - | The data for the `<colgroup>` element. |
| data | `Array` | - | - | The data for the table, can be a list of sections or rows. |
| hoverable | `Boolean` | `false` | - | Indicate if the row is hoverable or not. |
| responsive | `Boolean` | `false` | - | Indicate if the table content is responsive or not. |
| selectable | `Boolean` | `false` | - | Indicate if the table rows is selectable or not. |
| multiple | `Boolean` | `false` | - | Indicate if multiple rows can be selected in current table or not. |
| controls | `Boolean` | `false` | - | Indicate if the selectable rows has leading checkbox or radio controls or not. |
| selected-rows | `Array` | - | - | Indicate which rows in the `data` are selected. |
| disabled-rows | `Array` | - | - | Indicate which rows in the `data` are disabled. |
| size | `String` | - | small, large | Indicate if add borders on all sides of the table and cells or not. |
| striped | `Boolean` | `false` | - | Indicate if add zebra-striping to any table row within the `<tbody>` or not. |

### Table section

The data object in-depth for table section (`<thead>`, `<tbody>` or `<tfoot>`):

```js
/**
 * Simple section
 * @type {Array}
 */
[
  ['cell content', '...', 'cell content'],
  // ...
]
```

```js
/**
 * Custom section
 * @type {Object}
 */
{
  /**
   * The rows of the section.
   * @type {Array}
   */
  rows: [
    ['cell content', '...', 'cell content'],
    // ...
  ],

  /**
   * The CSS styles for the section.
   * @type {string|Object}
   */
  style: {},

  /**
   * The tag for the section, one of "thead", "tbody" and "tfoot".
   * @type {string}
   * @default 'tbody'
   */
  tag: 'thead',
}
```

### Table row

The data object in-depth for table row (`<tr>`):

```js
/**
 * Simple row
 * @type {Array|Object}
 */
['cell content', '...', 'cell content']
```

```js
/**
 * Custom row
 * @type {Object}
 */
{
  /**
   * The cells of the row.
   * @type {Array}
   */
  cells: ['cell content', '...', 'cell content'],

  /**
   * Indicate if the current row is disabled or not.
   * This is available only when the table is selectable.
   * @type {boolean}
   * @default false
   */
  disabled: true,

  /**
   * Indicate if the current row is selected or not.
   * This is available only when the table is selectable.
   * @type {boolean}
   * @default false
   */
  selected: true,

  /**
   * The CSS styles for the row.
   * @type {string|Object}
   */
  style: {},
}
```

### Table cell

The data object in-depth for table cell (`<th>` or `<td>`):

```js
/**
 * Simple cell
 * The content can be text, HTML, Vue component or a render function which returns VNodes.
 * @type {string|Function|Object}
 */
'cell content'
```

```js
/**
 * Custom cell
 * @type {Object}
 */
{
  /**
   * The colspan attribute of the cell.
   * @type {number}
   */
  colSpan: 1,

  /**
   * The content of the cell.
   * The content can be text, HTML, Vue component or render function which returns VNodes.
   * @type {string|Function|Object}
   */
  content: 'cell content',

  /**
   * The rowspan attribute of the cell.
   * @type {number}
   */
  rowSpan: 1,

  /**
   * Indicate if the column that contains the current cell is sortable or not.
   * Only available for <th> cell in the <thead> section.
   * @type {boolean}
   * @default false
   */
  sortable: true,

  /**
   * The CSS styles for the cell.
   * @type {string|Object}
   */
  style: {},

  /**
   * The tag for the cell, one of "th" and "td".
   * @type {string}
   * @default 'td'
   */
  tag: 'th',
}
```

### Table column group

The data object in-depth for table column group (`<colgroup>`):

```js
[
  // The data for <col>
  {
    /**
     * The span of the column.
     * @type {number}
     */
    span: 1,

    /**
     * The CSS styles for the column.
     * @type {string|Object}
     */
    style: {},
  },
  // ...
]
```

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| select | `(target, reversed = false)` | Select one or all rows in the body section. If `target` is set to `true`, then will select **all** rows. If `reversed` is set to `true`, then will **deselect** the target row(s). |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| change | `(selectedRows)` | Fires when the table is selectable and the selected rows are changed. |
