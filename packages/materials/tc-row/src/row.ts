import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-row',

  props: {
    alignItems: String,

    gutters: {
      type: Boolean,
      default: true,
    },

    justifyContent: String,

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      alignItems,
      justifyContent,
    } = this;

    return createElement(
      this.tag,

      {
        class: {
          'tc-row': true,
          'tc-row--gutters': this.gutters,
          [`tc-row--align-items-${alignItems}`]: alignItems,
          [`tc-row--justify-content-${justifyContent}`]: justifyContent,
        },

        on: this.$listeners,
      },

      this.$slots.default,
    );
  },
};
