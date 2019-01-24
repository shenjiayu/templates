import { CreateElement, VNode } from 'vue';

const STATUS_ICONS: any = {
  finish: 'check',
  success: 'check',
  error: 'x',
};

export default {
  name: 'tc-step-item',

  data() {
    return {
      active: false,
      initialStatus: '',
      initialSign: 1,
    };
  },

  props: {
    icon: String,
    sign: [Number, String],
    status: String,

    tag: {
      type: String,
      default: 'li',
    },

    text: String,
  },

  render(createElement: CreateElement): VNode {
    const {
      icon,
      sign,
      text,
    } = this;
    const status = this.status || this.initialStatus;
    const statusIcon = STATUS_ICONS[status];

    return createElement(
      this.tag,

      {
        attrs: {
          'aria-current': this.active ? 'step' : undefined,
        },

        class: {
          'tc-step__item': true,
          [`tc-step__item--${status}`]: status,
          'tc-step__item--active': this.active,
        },

        on: this.$listeners,
      },

      [
        createElement(
          'div',

          {
            class: 'tc-step__header',
          },

          [
            createElement(
              'span',

              {
                class: {
                  'tc-step__sign': !icon,
                  'tc-step__icon': icon,
                },
              },

              icon ? [
                createElement(
                  'tc-icon',

                  {
                    props: {
                      type: icon,
                    },
                  },
                ),
              ] : [
                statusIcon ? createElement(
                  'tc-icon',

                  {
                    props: {
                      type: statusIcon,
                      size: '.875rem',
                      strokeWidth: 3,
                    },
                  },
                ) : (sign || this.initialSign),
              ],
            ),
            text ? createElement(
              'span',

              {
                class: 'tc-step__text',
              },

              [
                text,
              ],
            ) : '',
            createElement(
              'span',

              {
                class: 'tc-step__line',
              },
            ),
          ],
        ),
        createElement(
          'div',

          {
            class: 'tc-step__body',
          },

          this.$slots.default,
        ),
      ],
    );
  },
};
