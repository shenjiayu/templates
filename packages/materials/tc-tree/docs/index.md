# Tree

## Usage

```html
<template>
  <div>
    <tc-tree :data="data"></tc-tree>
    <hr>
    <tc-tree :data="data" expanded></tc-tree>
    <hr>
    <tc-tree :data="data" click-action="expand" expanded hoverable></tc-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: 'Tree node 1',
            children: [
              {
                content: 'Tree node 1.1',
              },

              {
                content: 'Tree node 1.2',
                children: [
                  {
                    content: 'Tree node 1.2.1',
                  },

                  {
                    content: 'Tree node 1.2.2',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

## Guides

```html
<template>
  <div>
    <tc-tree :data="data" expanded guides></tc-tree>
    <hr>
    <tc-tree :data="data" :collapsible="false" expanded guides></tc-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: 'Tree node 1',
            children: [
              {
                content: 'Tree node 1.1',
              },

              {
                content: 'Tree node 1.2',
              },

              {
                content: 'Tree node 1.3',
                children: [
                  {
                    content: 'Tree node 1.3.1',
                  },
                ],
              },
            ],
          },

          {
            content: 'Tree node 2',
            children: [
              {
                content: 'Tree node 2.1',
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

## Selectable

```html
<template>
  <tc-tree :data="data" click-action="select" @change="change" expanded selectable></tc-tree>
</template>

<script>
  export default {
    data() {
      return {
        selectedNodes: [],
        data: [
          {
            content: 'Tree node 1',
          },

          {
            content: 'Tree node 2',
            children: [
              {
                content: 'Tree node 2.1',
              },

              {
                content: 'Tree node 2.2',
                children: [
                  {
                    content: 'Tree node 2.2.1',
                    disabled: true,
                  },

                  {
                    content: 'Tree node 2.2.2',
                    selected: true,
                  },
                ],
              },
            ],
          },
        ],
      };
    },

    methods: {
      change(target, states) {
        console.log(target, states);
      },
    },
  };
</script>
```

## Accordion

```html
<template>
  <tc-tree :data="data" click-action="expand" accordion expanded></tc-tree>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: 'Tree node 1',
            children: [
              {
                content: 'Tree node 1.1',
                children: [
                  {
                    content: 'Tree node 1.1.1',
                  },
                ],
              },

              {
                content: 'Tree node 1.2',
                children: [
                  {
                    content: 'Tree node 1.2.1',
                  },
                ],
              },
            ],
          },

          {
            content: 'Tree node 2',
            children: [
              {
                content: 'Tree node 2.1',
              },

              {
                content: 'Tree node 2.2',
              },
            ],
          },

          {
            content: 'Tree node 3',
            children: [
              {
                content: 'Tree node 3.1',
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

## Lazy loading

```html
<template>
  <tc-tree :data="data"></tc-tree>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: 'Tree node 1',
            children: (callback) => {
              setTimeout(() => {
                callback([
                  {
                    content: 'Tree node 1.1',
                  },
                  {
                    content: 'Tree node 1.2',
                    children: (callback) => {
                      setTimeout(() => {
                        callback([
                          {
                            content: 'Tree node 1.2.1',
                          },
                          {
                            content: 'Tree node 1.2.2',
                          },
                        ]);
                      }, 1000);
                    },
                  },
                ]);
              }, 1000);
            },
          },
        ],
      };
    },
  };
</script>
```

## Filtering

```html
<template>
  <div>
    <p>
      <tc-input placeholder="Filter items..." @input="input" :value="keyword"></tc-input>
    </p>
    <tc-tree :data="filteredData" expanded></tc-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
        data: [
          {
            content: 'Tree node 1',
            children: [
              {
                content: 'Tree node 1.1',
              },

              {
                content: 'Tree node 1.2',
              },

              {
                content: 'Tree node 1.3',
              },
            ],
          },

          {
            content: 'Tree node 2',
            children: [
              {
                content: 'Tree node 2.1',
              },

              {
                content: 'Tree node 2.2',
                children: [
                  {
                    content: 'Tree node 2.2.1',
                  },

                  {
                    content: 'Tree node 2.2.2',
                  },
                ],
              },
            ],
          },

          {
            content: 'Tree node 3',
          },
        ],
      };
    },

    computed: {
      filteredData() {
        const { data, keyword } = this;
        const filter = (nodes = []) => {
          const filtered = [];

          nodes.forEach((node) => {
            const clone = Object.assign({}, node);
            const children = filter(node.children);

            if (children.length > 0 || String(node.content).indexOf(keyword) !== -1) {
              clone.children = children;
              filtered.push(clone);
            };
          });

          return filtered;
        };

        return keyword ? filter(data) : data;
      },
    },

    methods: {
      input(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.keyword = event.target.value;
        }, 300);
      },
    },
  };
</script>
```

## Custom content

```html
<template>
  <tc-tree :data="data" expanded></tc-tree>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: this.render,
            children: [
              {
                content: this.render,
              },
            ]
          },
        ],
      };
    },

    methods: {
      render(createElement, current, parent) {
        const removable = parent && !(current.children && current.children.length > 0);

        return createElement(
          'div',

          {
            class: 'custom-content',
          },

          [
            'Tree node',

            createElement(
              'span',

              [
                createElement(
                  'tc-icon',

                  {
                    props: {
                      type: 'plus-circle',
                    },

                    on: {
                      click: () => {
                        this.append(current, {
                          content: this.render,
                        });
                      },
                    },
                  },
                ),

                createElement(
                  'tc-icon',

                  {
                    attrs: {
                      disabled: !removable,
                    },

                    props: {
                      type: 'minus-circle',
                    },

                    on: {
                      click: () => {
                        if (removable) {
                          this.remove(current, parent);
                        }
                      },
                    },
                  },
                ),
              ],
            ),
          ],
        );
      },

      append(target, child) {
        target.children = (target.children || []).concat(child);
        this.data = this.data.slice(0);
      },

      remove(target, parent) {
        parent.children.splice(parent.children.indexOf(target), 1);
        this.data = this.data.slice(0);
      },
    },
  };
</script>

<style scoped>
  .custom-content > span {
    float: right;
  }

  .custom-content > span > .tc-icon {
    color: #0074d9;
    height: 1.25rem;
    margin-top: .125rem;
    vertical-align: top;
    width: 1.25rem;
  }

  .custom-content > span > .tc-icon[disabled] {
    color: gray;
    cursor: not-allowed;
    opacity: .25;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| accordion | `Boolean` | `false` | - | Indicate if the tree nodes is collapsed as accordion or not. |
| click-action | `String` | - | expand, select | Specify the action when click on the node content. |
| collapsible | `Boolean` | `true` | - | Indicate if the tree nodes is collapsible or not. |
| data | `Array` | - | - | The root tree nodes of the tree. |
| disabled | `Boolean` | `false` | - | Indicate if the tree nodes is disabled or not. Only available when the `selectable` prop is set to `true`. |
| expanded | `Boolean` | `false` | - | Indicate if the tree nodes is expanded or not. Only available when the `collapsible` prop is set to `true`. |
| guides | `Boolean` | `false` | - | Indicate if the tree nodes is guides or not. |
| hoverable | `Boolean` | `false` | - | Indicate if the tree nodes is hoverable or not. |
| selectable | `Boolean` | `false` | - | Indicate if the tree nodes is selectable or not. |
| selected | `Boolean` | `false` | - | Indicate if the tree nodes is selected or not. Only available when the `selectable` prop is set to `true`. |
| tag | `String` | `'div'` | - | The element tag of the tree. |

### Tree node

The data object in-depth for tree node:

```js
{
  /**
   * The content of the node.
   * The content can be text, HTML, Vue component or render function which returns VNode.
   * @type {string|Function|Object}
   * @example
   * {
   *   template: '<p>node content</p>'
   * }
   * @example
   * function (createElement, options) {
   *   return createElement('div', ['node content]);
   * }
   */
  content: 'node content',

  /**
   * The children of the node.
   * @type {Array|Function}
   */
  children: [],

  /**
   * Indicate if the node is expanded or not.
   * @type {boolean}
   * @default false
   */
  expanded: true,

  /**
   * Indicate if the node is selected or not.
   * @type {boolean}
   * @default false
   */
  selected: true,

  /**
   * Indicate if the node is disabled or not.
   * @type {boolean}
   * @default false
   */
  disabled: true,

  /**
   * The CSS styles for the node element.
   * @type {string|Object}
   */
  style: {},
}
```

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| getData | `()` | Return the latest data (nodes). |
| getExpandedNodes | `()` | Return the tree nodes which are expanded. |
| getSelectedNodes | `()` | Return the tree nodes which are selected. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| expand | `(targetNode, expanded)` | Fires when the expanded state of one of the tree nodes is changed. |
| select | `(targetNode, selected)` | Fires when the selected state of one of the tree nodes is changed. |
| change | `(targetNode, { expanded, selected })` | Fires when the expanded state or selected state of one of the tree nodes is changed. |
