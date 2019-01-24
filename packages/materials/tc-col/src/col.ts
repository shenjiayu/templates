import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-col',

  props: {
    alignSelf: String,
    offset: [Number, String],
    order: [Number, String],
    span: [Number, String],

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      alignSelf,
      offset,
      order,
      span,
    } = this;
    const classList = [
      'tc-col',
      alignSelf ? `tc-col--align-self-${alignSelf}` : '',
    ];
    const spaces = /\s+/;

    if (utils.isNumber(span)) {
      classList.push(`tc-col--span-${span}`);
    } else if (utils.isString(span)) {
      classList.push(...span.split(spaces).map((size: string) => `tc-col--span-${size}`));
    } else {
      classList.push('tc-col--span');
    }

    if (utils.isNumber(offset)) {
      classList.push(`tc-col--offset-${offset}`);
    } else if (utils.isString(offset)) {
      classList.push(...offset.split(spaces).map((size: string) => `tc-col--offset-${size}`));
    }

    if (utils.isNumber(order)) {
      classList.push(`tc-col--order-${order}`);
    } else if (utils.isString(order)) {
      classList.push(...order.split(spaces).map((size: string) => `tc-col--order-${size}`));
    }

    return createElement(
      this.tag,

      {
        class: classList,
        on: this.$listeners,
      },

      this.$slots.default,
    );
  },
};
