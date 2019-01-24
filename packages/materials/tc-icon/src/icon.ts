import { CreateElement, VNode } from 'vue';
import { icons } from 'feather-icons';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-icon',

  props: {
    animation: String,

    fill: {
      type: String,
      default: 'none',
    },

    size: {
      type: [Number, String],
      default: 24,
    },

    stroke: {
      type: String,
      default: 'currentColor',
    },

    strokeLinecap: {
      type: String,
      default: 'round',
    },

    strokeLinejoin: {
      type: String,
      default: 'round',
    },

    strokeWidth: {
      type: [Number, String],
      default: 2,
    },

    tag: {
      type: String,
      default: 'i',
    },

    type: {
      type: String,
      required: true,
      validator(type: string) {
        if (!icons[type]) {
          throw new Error(`"${type}" is not an available icon type.`);
        }

        return true;
      },
    },
  },

  render(createElement: CreateElement): VNode {
    const { animation, type } = this;
    const icon = icons[type];

    return createElement(
      this.tag,

      {
        attrs: {
          'data-name': type,
          'data-tags': icon ? icon.tags : '',
          'data-type': type,
        },

        class: {
          'tc-icon': true,
          [`tc-icon--${type}`]: type,
          [`tc-icon--${animation}`]: animation,
        },

        on: this.$listeners,
      },

      [
        icon ? createElement(
          'svg',

          {
            attrs: utils.assign({}, icon.attrs, {
              fill: this.fill,
              height: this.size,
              stroke: this.stroke,
              'stroke-linecap': this.strokeLinecap,
              'stroke-linejoin': this.strokeLinejoin,
              'stroke-width': this.strokeWidth,
              width: this.size,
            }),

            class: [icon.attrs.class, 'tc-icon__content'],

            domProps: {
              innerHTML: icon.contents,
            },
          },
        ) : '',
      ],
    );
  },
};
