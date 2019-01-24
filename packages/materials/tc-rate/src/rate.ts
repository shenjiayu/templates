import * as utils from '../../tc-utils/src';
import { CreateElement, VNode } from 'vue';
import * as Rate from './rate.d';

export default {
  name: 'tc-rate',

  model: {
    event: 'change',
  },

  data() {
    return {
      currentValue: 0,
      pendingValue: 0,
    };
  },

  props: {
    block: Boolean,
    color: [String, Function],
    disabled: Boolean,
    icon: {
      type: [String, Function],
      default: 'star',
    },

    max: {
      type: Number,
      default: 5,
    },

    min: {
      type: Number,
      default: 0,
    },

    name: String,
    readonly: Boolean,
    size: [Number, String],

    step: {
      type: Number,
      default: 1,
    },

    tag: {
      type: String,
      default: 'div',
    },

    tooltip: [Boolean, Function],

    value: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    items() {
      const {
        color,
        icon,
        max,
        min,
        pendingValue,
        step,
        tooltip,
      } = this;
      const items: Rate.Item[] = [];
      let value = min + step;

      while (value <= max) {
        const checked = pendingValue >= value;
        const indeterminate = !checked && pendingValue > value - step;

        items.push({
          checked,
          indeterminate,
          value,
          color: (utils.isFunction(color) ?
            color.call(this, pendingValue, value) :
            color
          ),
          icon: (utils.isFunction(icon) ?
            icon.call(this, pendingValue, value) :
            icon
          ),
          label: (utils.isFunction(tooltip) ?
            tooltip.call(this, pendingValue, value) :
            value
          ),
        });

        value += step;
      }

      return items;
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,

      {
        class: {
          'tc-rate': true,
          'tc-rate--block': this.block,
          'tc-rate--disabled': this.disabled,
          'tc-rate--readonly': this.readonly,
        },

        style: {
          color: (utils.isFunction(this.color) ?
            this.color.call(this, this.pendingValue) :
            this.color
          ),
          fontSize: utils.isNumber(this.size) ? `${this.size}px` : this.size,
        },

        on: this.$listeners,
      },

      [
        createElement(
          'input',

          {
            attrs: {
              disabled: this.disabled,
              max: this.max,
              min: this.min,
              name: this.name,
              readonly: this.readonly,
              step: this.step,
              type: 'range',
              value: this.currentValue,
            },

            class: 'tc-rate__input',
          },
        ),

        ...this.items.map((item: Rate.Item) => createElement(
          'span',

          {
            attrs: {
              'data-label': item.label,
              'data-value': item.value,
            },

            class: {
              'tc-rate__item': true,
              'tc-rate__item--checked': item.checked,
              'tc-rate__item--indeterminate': item.indeterminate,
            },

            directives: this.tooltip ? [
              {
                name: 'tc-tooltip',
                oldValue: item.value,
                value: item.label,
                expression: '',
                arg: '',
                modifiers: {},
              },
            ] : [],

            on: this.readonly || this.disabled ? {} : ((listeners: any) => {
              if (utils.Window.PointerEvent) {
                listeners[
                  utils.Window.PointerEvent ? 'pointerenter' : 'mouseenter'
                ] = listeners.touchstart;
                listeners[
                  utils.Window.PointerEvent ? 'pointerleave' : 'mouseleave'
                ] = listeners.touchend;
              }

              return listeners;
            })({
              click: () => {
                this.rate(item.value);
              },
              touchstart: () => {
                this.pend(item.value);
              },
              touchend: () => {
                this.pend(this.currentValue);
              },
            }),
          },

          [
            createElement(
              'tc-icon',

              {
                class: 'tc-rate__icon',

                props: {
                  size: this.size,
                  strokeWidth: 1,
                  type: item.icon,
                },
              },
            ),

            item.indeterminate ? createElement(
              'span',

              {
                class: 'tc-rate__wrap',

                style: {
                  width: `${((this.currentValue - (item.value - this.step)) / this.step) * 100}%`,
                },
              },

              [
                createElement(
                  'tc-icon',

                  {
                    class: 'tc-rate__icon',

                    props: {
                      size: this.size,
                      strokeWidth: 1,
                      type: item.icon,
                    },
                  },
                ),
              ],
            ) : '',
          ],
        )),

        createElement(
          'span',

          {
            class: 'tc-rate__content',
          },

          this.$slots.default,
        ),
      ],
    );
  },

  watch: {
    currentValue(value: number) {
      this.pendingValue = value;
    },

    value(value: number) {
      this.currentValue = value;
    },
  },

  methods: {
    pend(newValue: number) {
      const oldValue = this.pendingValue;

      this.pendingValue = newValue;
      this.$emit('input', newValue, oldValue);
    },

    rate(newValue: number) {
      const oldValue = this.currentValue;

      this.currentValue = newValue;
      this.$emit('change', newValue, oldValue);
    },
  },

  created() {
    this.currentValue = this.value;
  },
};
