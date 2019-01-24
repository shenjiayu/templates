import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-container',

  props: {
    fluid: Boolean,

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,

      {
        class: {
          'tc-container': true,
          'tc-container--fluid': this.fluid,
        },

        on: this.$listeners,
      },

      this.$slots.default,
    );
  },
};
