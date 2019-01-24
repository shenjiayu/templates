import Popper from 'popper.js';
import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-tooltip',

  model: {
    event: 'visibilitychange',
    prop: 'visible',
  },

  data() {
    return {
      currentPlacement: '',
      focused: false,
      isVisible: false,
      targetTitle: '',
    };
  },

  props: {
    animation: {
      type: Boolean,
      default: true,
    },

    container: [String, utils.Window.Element],
    content: [String, Function, Object],

    delay: {
      type: [Number, Object],
      default: 0,
    },

    disabled: Boolean,

    fallbackPlacement: {
      type: String,
      default: 'flip',
    },

    offset: {
      type: Number,
      default: 0,
    },

    placement: {
      type: String,
      default: 'top',
    },

    target: [String, utils.Window.Element],

    trigger: {
      type: String,
      default: 'hover focus',
    },

    visible: Boolean,
  },

  computed: {
    delayAsObject() {
      const { delay } = this;

      return utils.isObject(delay) ? delay : {
        show: delay,
        hide: delay,
      };
    },

    listeners() {
      const listeners: any = {};

      this.trigger.split(/\s+/).forEach((trigger: string) => {
        switch (trigger) {
          case 'click':
            listeners.click = this.toggle;
            break;

          case 'hover':
            listeners[
              utils.Window.PointerEvent ? 'pointerenter' : 'mouseenter touchstart'
            ] = this.show;
            listeners[
              utils.Window.PointerEvent ? 'pointerleave' : 'mouseleave touchend'
            ] = this.hide;
            break;

          case 'focus':
            listeners.focus = this.show;
            listeners.blur = this.hide;
            break;

          // case 'manual':
          default:
        }
      });

      return listeners;
    },

    currentPlacementAsObject() {
      const [placement, variation] = this.currentPlacement.split(/-+/);

      return {
        placement,
        variation,
      };
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      content,
      currentPlacement,
      currentPlacementAsObject,
    } = this;

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
              'tc-tooltip': true,
              [`tc-tooltip--${currentPlacementAsObject.placement}`]: currentPlacementAsObject,
              [`tc-tooltip--${currentPlacement}`]: currentPlacement,
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
            createElement(
              'div',

              {
                class: 'tc-tooltip__arrow',
                ref: 'arrow',
              },
            ),

            createElement(
              'div',

              {
                class: 'tc-tooltip__inner',
              },

              content ?
                [createElement(utils.createComponent(content))] :
                (this.$slots.default || [this.targetTitle]),
            ),
          ],
        ),
      ],
    );
  },

  watch: {
    container(value: string | Element) {
      this.destroyContainer();
      this.mountContainer(value);
    },

    disabled(value: boolean) {
      if (value) {
        this.isVisible = false;
      }
    },

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
    show(event?: Event) {
      if (this.focused) {
        return;
      }

      this.focused = event && event.type === 'focus';

      if (this.disabled || this.isVisible) {
        return;
      }

      const { delayAsObject } = this;

      this.$once('show', this.mountPopper);

      clearTimeout(this.timeout);

      if (delayAsObject.show > 0) {
        this.timeout = setTimeout(() => {
          this.isVisible = true;
        }, delayAsObject.show);
      } else {
        this.isVisible = true;
      }
    },

    hide(event?: Event) {
      if (this.focused && event && event.type !== 'blur') {
        return;
      }

      this.focused = false;

      if (this.disabled || !this.isVisible) {
        return;
      }

      this.$once('hidden', this.destroyPopper);

      const { delayAsObject } = this;

      clearTimeout(this.timeout);

      if (delayAsObject.hide > 0) {
        this.timeout = setTimeout(() => {
          this.isVisible = false;
        }, delayAsObject.hide);
      } else {
        this.isVisible = false;
      }
    },

    toggle(event?: Event) {
      if (this.isVisible) {
        this.hide(event);
      } else {
        this.show(event);
      }
    },

    update() {
      if (this.popper) {
        this.popper.scheduleUpdate();
      }
    },

    mountContainer(container: any = this.container) {
      const { $el } = this;
      let currentContainer = container;

      if (utils.isString(container)) {
        currentContainer = $el.ownerDocument.querySelector(container);
      }

      if (currentContainer) {
        this.initialParentElement = $el.parentElement;
        this.initialNextElementSibling = $el.nextElementSibling;
        this.currentContainer = currentContainer;
        currentContainer.appendChild($el);
      }
    },

    destroyContainer() {
      if (this.initialParentElement) {
        this.initialParentElement.insertBefore(this.$el, this.initialNextElementSibling);
      }
    },

    mountTarget(target: any = this.target || this.$el.parentElement) {
      let currentTarget = target;

      if (utils.isString(target)) {
        currentTarget = this.$el.ownerDocument.querySelector(target);
      }

      if (currentTarget) {
        utils.forEach(this.listeners, (listener: Function, type: string) => {
          utils.addEventListener(currentTarget, type, listener);
        });
        this.currentTarget = currentTarget;
        this.targetTitle = currentTarget.getAttribute('title');
      }
    },

    destroyTarget() {
      if (this.currentTarget) {
        utils.forEach(this.listeners, (listener: Function, type: string) => {
          utils.removeEventListener(this.currentTarget, type, listener);
        });
        this.currentTarget = null;
      }
    },

    mountPopper() {
      if (this.currentTarget) {
        this.popper = new Popper(this.currentTarget, this.$el, {
          modifiers: {
            arrow: {
              element: this.$refs.arrow,
            },

            flip: {
              behavior: this.fallbackPlacement,
            },

            offset: {
              offset: this.offset,
            },
          },

          onCreate: (data) => {
            this.currentPlacement = data.placement;
          },

          onUpdate: (data) => {
            this.currentPlacement = data.placement;
          },

          placement: this.placement,
        });
      }
    },

    destroyPopper() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    },
  },

  created() {
    this.currentPlacement = this.placement;
  },

  mounted() {
    this.mountContainer();
    this.mountTarget();

    if (this.visible) {
      this.show();
    }
  },

  beforeDestroy() {
    this.destroyPopper();
    this.destroyContainer();
    this.destroyTarget();
  },
};
