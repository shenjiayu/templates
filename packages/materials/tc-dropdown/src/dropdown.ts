import Popper from 'popper.js';
import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-dropdown',

  model: {
    event: 'visibilitychange',
    prop: 'visible',
  },

  data() {
    return {
      currentPlacement: '',
      focused: false,
      isVisible: false,
    };
  },

  props: {
    animation: {
      type: Boolean,
      default: true,
    },

    container: [String, utils.Window.Element],

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
      default: 'bottom-start',
    },

    tag: {
      type: String,
      default: 'div',
    },

    target: [String, utils.Window.Element],

    trigger: {
      type: String,
      default: 'click',
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
          this.tag,

          {
            attrs: {
              'aria-hidden': !this.isVisible,
            },

            class: {
              'tc-dropdown': true,
              [`tc-dropdown--${currentPlacementAsObject.placement}`]: currentPlacementAsObject,
              [`tc-dropdown--${currentPlacement}`]: currentPlacement,
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

            on: utils.assign({}, this.$listeners, {
              click: this.click,
            }),
          },

          this.$slots.default,
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

      const { currentTarget, delayAsObject } = this;

      this.$once('show', this.mountPopper);
      this.$once('shown', () => {
        utils.addEventListener(document, 'click', this.click);
      });

      if (currentTarget) {
        currentTarget.setAttribute('aria-expanded', true);
      }

      if (delayAsObject.show > 0) {
        clearTimeout(this.timeout);
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

      this.$once('hide', () => {
        utils.removeEventListener(document, 'click', this.click);
      });
      this.$once('hidden', this.destroyPopper);

      const { currentTarget, delayAsObject } = this;

      if (currentTarget) {
        currentTarget.setAttribute('aria-expanded', false);
      }

      if (delayAsObject.hide > 0) {
        clearTimeout(this.timeout);
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

    click(e: Event) {
      const { currentTarget } = this;

      if (currentTarget && currentTarget.contains(e.target)) {
        return;
      }

      this.hide();
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
      }
    },

    destroyTarget() {
      const { currentTarget } = this;

      if (currentTarget) {
        utils.forEach(this.listeners, (listener: Function, type: string) => {
          utils.removeEventListener(currentTarget, type, listener);
        });
        this.currentTarget = null;
      }
    },

    mountPopper() {
      const { currentTarget } = this;

      if (currentTarget) {
        this.popper = new Popper(currentTarget, this.$el, {
          modifiers: {
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
