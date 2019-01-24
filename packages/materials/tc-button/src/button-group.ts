import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-button-group',

  props: {
    size: String,

    tag: {
      type: String,
      default: 'div',
    },

    vertical: Boolean,
  },

  render(createElement: CreateElement): VNode {
    const { size, $slots } = this;

    if ($slots.default) {
      $slots.default.forEach((node: any) => {
        if (/^vue-component-\w+-eks(-\w+)+$/.test(node.tag)) {
          node.componentOptions.propsData.size = size;
        }
      });
    }

    return createElement(
      this.tag,

      {
        class: {
          'tc-button-group': true,
          'tc-button-group--vertical': this.vertical,
          [`tc-button-group--${size}`]: size,
        },
      },

      $slots.default,
    );
  },
};
