import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-badge',

  props: {
    rounded: Boolean,

    tag: {
      type: String,
      default: 'span',
    },

    type: String,
  },

  render(createElement: CreateElement): VNode {
    const { type } = this;

    return createElement(
      this.tag,

      {
        class: {
          'tc-badge': true,
          [`tc-badge--${type}`]: type,
          'tc-badge--rounded': this.rounded,
        },

        on: this.$listeners,
      },

      this.$slots.default,
    );
  },
};
