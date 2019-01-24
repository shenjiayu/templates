import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-alert',

  data() {
    return {
      visible: true,
    };
  },

  props: {
    closable: Boolean,

    tag: {
      type: String,
      default: 'div',
    },

    type: String,
  },

  render(createElement: CreateElement): VNode {
    const { type } = this;

    return createElement(
      'transition',

      {
        props: {
          name: 'tc-transition--fade',
        },

        on: {
          beforeLeave: () => {
            this.$emit('close');
          },
          afterLeave: () => {
            this.$emit('closed');
          },
        },
      },

      [this.visible ? createElement(
        this.tag,

        {
          attrs: {
            role: 'alert',
          },

          class: {
            'tc-alert': true,
            [`tc-alert--${type}`]: type,
            'tc-alert--closable': this.closable,
          },

          on: this.$listeners,
        },

        (this.$slots.default || []).concat(this.closable ? createElement(
          'button',

          {
            class: 'tc-alert__close',

            attrs: {
              type: 'button',
              'aria-label': 'close',
            },

            on: {
              click: this.close,
            },
          },

          [
            createElement(
              'span',

              {
                attrs: {
                  'aria-hidden': true,
                },

                domProps: {
                  innerHTML: '&times;',
                },
              },
            ),
          ],
        ) : ''),
      ) : ''],
    );
  },

  methods: {
    close() {
      this.visible = false;
    },
  },
};
