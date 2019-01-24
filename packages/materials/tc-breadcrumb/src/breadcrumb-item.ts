import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-breadcrumb-item',

  props: {
    active: Boolean,

    tag: {
      type: String,
      default: 'li',
    },

    to: [String, Object],
  },

  render(createElement: CreateElement): VNode {
    const { active } = this;

    return createElement(
      this.tag,

      {
        attrs: {
          'data-separator': this.$parent.separator,
          href: this.tag === 'a' && utils.isString(this.to) ? this.to : undefined,
          'aria-current': active ? 'page' : undefined,
        },

        class: {
          'tc-breadcrumb__item': true,
          'tc-breadcrumb__item--active': active,
        },

        on: utils.assign({}, this.$listeners, {
          click: this.click,
        }),
      },

      this.$slots.default,
    );
  },

  methods: {
    click() {
      const { $router, to } = this;

      if (utils.isUndefined(to)) {
        return;
      }

      if ($router) {
        $router.push(to);
      } else {
        window.location.assign(utils.isObject(to) && to.path ? to.path : to);
      }
    },
  },
};
