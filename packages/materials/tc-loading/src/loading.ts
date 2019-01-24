import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-loading',

  model: {
    event: 'visibilitychange',
    prop: 'visible',
  },

  data() {
    return {
      isVisible: false,
    };
  },

  props: {
    content: [String, Function, Object],
    fullscreen: Boolean,

    icon: {
      type: [String, Boolean],
      default: 'loader',
    },

    lock: Boolean,

    target: {
      type: [String, utils.Window.Element],
    },

    visible: Boolean,
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      'transition',

      {
        props: {
          name: this.animation ? 'tc-transition--fade' : '',
        },

        on: {
          beforeEnter: () => {
            this.$emit('show');
            this.$emit('visibilitychange', true);
          },

          afterEnter: () => {
            this.$emit('shown');
          },

          beforeLeave: () => {
            this.$emit('hide');
            this.$emit('visibilitychange', false);
          },

          afterLeave: () => {
            this.$emit('hidden');
          },
        },
      },

      [
        createElement(
          'div',

          {
            attrs: {
              'aria-hidden': !this.isVisible,
            },

            class: {
              'tc-loading': true,
              'tc-loading--fullscreen': this.fullscreen,
            },

            directives: [
              {
                name: 'show',
                oldValue: false,
                value: this.isVisible,
                expression: '',
                arg: '',
                modifiers: {},
              },
            ],

            on: this.$listeners,
          },

          [
            this.icon === false ? '' : createElement(
              'tc-icon',

              {
                class: 'tc-loading__icon',

                props: {
                  animation: 'rotation',
                  type: this.icon,
                },
              },
            ),

            (this.content || this.$slots.default) ? createElement(
              'div',

              {
                class: 'tc-loading__content',
              },

              utils.isUndefined(this.content) ? this.$slots.default : [
                createElement(utils.createComponent(this.content)),
              ],
            ) : '',
          ],
        ),
      ],
    );
  },

  watch: {
    target(value: string | Element) {
      this.destroyTarget();
      this.mountTarget(value);
    },

    visible(value: boolean) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    },
  },

  methods: {
    show() {
      if (!this.isVisible) {
        this.isVisible = true;

        if (this.lock) {
          this.currentTarget.classList.add('tc-loading-lock');
        }
      }
    },

    hide() {
      if (this.isVisible) {
        this.isVisible = false;

        if (this.lock) {
          this.currentTarget.classList.remove('tc-loading-lock');
        }
      }
    },

    toggle() {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    },

    mountTarget(target: any = this.target) {
      const { $el } = this;
      const { ownerDocument, parentElement } = $el;
      const body = ownerDocument.body || ownerDocument.documentElement;
      let currentTarget = target;

      if (this.fullscreen) {
        currentTarget = body;
      } else if (utils.isString(target)) {
        currentTarget = ownerDocument.querySelector(target);
      }

      if (!currentTarget) {
        currentTarget = parentElement || body;
      }

      this.initialPosition = currentTarget.style.position;
      this.currentTarget = currentTarget;

      if (
        !/html|body/i.test(currentTarget.tagName) &&
        ownerDocument.defaultView.getComputedStyle(currentTarget).position === 'static'
      ) {
        currentTarget.style.position = 'relative';
      }

      if (currentTarget !== parentElement) {
        this.initialParentElement = parentElement;
        this.initialNextElementSibling = $el.nextElementSibling;
        currentTarget.appendChild($el);
      }
    },

    destroyTarget() {
      if (this.currentTarget) {
        this.currentTarget.style.position = this.initialPosition;

        if (this.initialParentElement) {
          this.initialParentElement.insertBefore(this.$el, this.initialNextElementSibling);
        }
      }
    },
  },

  mounted() {
    this.mountTarget();

    if (this.visible) {
      this.show();
    }
  },

  beforeDestroy() {
    this.destroyTarget();
  },
};
