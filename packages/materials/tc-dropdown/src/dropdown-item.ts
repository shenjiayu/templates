import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-dropdown-item',

  data() {
    return {
    };
  },

  props: {
    disabled: Boolean,
    divider: Boolean,
    header: Boolean,

    tag: {
      type: String,
      default: 'button',
    },
  },

  render(createElement: CreateElement): VNode {
    const { disabled } = this;

    return createElement(
      this.tag,

      {
        attrs: {
          disabled,
        },

        class: {
          'tc-dropdown__item': true,
          'tc-dropdown__item--disabled': disabled,
          'tc-dropdown__item--divider': this.divider,
          'tc-dropdown__item--header': this.header,
        },

        on: this.$listeners,
      },

      this.$slots.default,
    );
  },
};
