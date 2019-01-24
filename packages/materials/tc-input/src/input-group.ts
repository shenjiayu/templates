import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-input-group',

  props: {
    size: String,

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement: CreateElement): VNode {
    const { size, $slots } = this;

    if ($slots.default) {
      $slots.default.forEach((node: any) => {
        if (/^vue-component-\w+-eks(-\w+)+$/.test(node.tag)) {
          node.componentOptions.propsData.size = size;
        } else {
          node.data = utils.assign({
            class: 'tc-input-group__addon',
          }, node.data);
        }
      });
    }

    return createElement(
      this.tag,

      {
        class: {
          'tc-input-group': true,
          [`tc-input-group--${size}`]: size,
        },
      },

      $slots.default,
    );
  },
};
