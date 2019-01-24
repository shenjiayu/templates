import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';
import * as Button from './button.d';

export default {
  name: 'tc-button',

  props: {
    block: Boolean,
    disabled: Boolean,
    icon: [String, Object, Array],
    loading: Boolean,
    outline: Boolean,
    rounded: Boolean,
    size: String,

    tag: {
      type: String,
      default: 'button',
    },

    type: {
      type: String,
      default: 'button',
    },
  },

  computed: {
    icons() {
      const icons: Button.IconOptions[] = [];
      const normalize = (target: any) => {
        if (!target) {
          return;
        }

        if (utils.isArray(target)) {
          target.forEach(normalize);
          return;
        }

        const icon: Button.IconOptions = utils.isPlainObject(target) ? target : {
          type: target,
        };

        if (this.loading && utils.isUndefined(icon.animation)) {
          icon.animation = 'rotation';
        }

        icons.push(icon);
      };

      normalize(this.icon || (this.loading ? 'loader' : undefined));

      return icons;
    },

    types() {
      const nativeTypes = [
        'button',
        'submit',
        'reset',
      ];
      const customTypes = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
      ];
      const types = {
        native: nativeTypes[0],
        custom: '',
      };

      this.type.split(/\s+/).forEach((type: string) => {
        if (utils.includes(type, nativeTypes)) {
          types.native = type;
        } else if (utils.includes(type, customTypes)) {
          types.custom = type;
        }
      });

      return types;
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      $attrs,
      $slots,
      icons,
      size,
      tag,
      types,
    } = this;
    const iconOnly = icons.length === 1 && !$slots.default;

    return createElement(
      utils.includes(tag, ['button', 'input', 'a']) ? tag : 'button',

      {
        class: {
          'tc-button': true,
          [`tc-button--${types.custom}`]: types.custom,
          [`tc-button--${size}`]: size,
          'tc-button--block': this.block,
          'tc-button--rounded': this.rounded,
          'tc-button--outline': this.outline,
        },

        attrs: {
          type: utils.includes(tag, ['button', 'input']) ? types.native : $attrs.type,
          value: !$attrs.value && tag === 'input' ?
            utils.getChildrenTextContent($slots.default) :
            $attrs.value,
          disabled: this.disabled || this.loading,
          role: tag === 'a' ? 'button' : undefined,
        },

        on: this.$listeners,
      },

      tag === 'input' ? [] : icons.map((icon: Button.IconOptions) => createElement(
        'tc-icon',

        {
          class: {
            'tc-button__icon': true,
            'tc-button__icon--start': !iconOnly && !icon.end,
            'tc-button__icon--end': !iconOnly && icon.end,
          },

          props: icon,
        },
      )).concat($slots.default),
    );
  },
};
