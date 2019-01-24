import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-breadcrumb',

  props: {
    separator: {
      type: String,
      default: '/',
    },

    tag: {
      type: String,
      default: 'ol',
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,

      {
        attrs: {
          'aria-label': 'breadcrumb',
          role: 'navigation',
        },

        class: {
          'tc-breadcrumb': true,
        },

        on: this.$listeners,
      },

      this.$slots.default,
    );
  },
};
