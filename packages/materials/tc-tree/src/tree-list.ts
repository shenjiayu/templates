import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-tree-list',

  props: {
    collapsible: Boolean,
    expanded: Boolean,
    indexes: Array,

    tag: {
      type: String,
      default: 'ul',
    },
  },

  render(createElement: CreateElement): VNode {
    const list = createElement(
      this.tag,

      {
        attrs: {
          role: 'group',
        },

        class: {
          'tc-tree__list': true,
        },
      },

      this.$slots.default,
    );

    return this.collapsible ? createElement(
      'tc-collapse',

      {
        attrs: {
          'aria-hidden': !this.expanded,
          id: `tc-tree__collapse-${this.indexes.join('-')}`,
        },

        props: {
          expanded: this.expanded,
        },
      },

      [
        list,
      ],
    ) : list;
  },
};
