import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

const EVENT_POINTER_DOWN = utils.Window.PointerEvent ? 'pointerdown' : 'touchstart mousedown';
const EVENT_POINTER_MOVE = utils.Window.PointerEvent ? 'pointermove' : 'touchmove mousemove';
const EVENT_POINTER_UP = (
  utils.Window.PointerEvent ? 'pointerup pointercancel' : 'touchend touchcancel mouseup'
);

export default {
  name: 'tc-slider',

  model: {
    prop: 'value',
    event: 'input',
  },

  data() {
    return {
      currentRange: [],
      currentRect: {},
      currentValue: 0,
    };
  },

  props: {
    disabled: Boolean,

    max: {
      type: Number,
      default: 100,
    },

    min: {
      type: Number,
      default: 0,
    },

    name: String,
    readonly: Boolean,

    step: {
      type: Number,
      default: 1,
    },

    tag: {
      type: String,
      default: 'div',
    },

    value: {
      type: [Number, Array],
      default: 0,
    },
  },

  computed: {
    range() {
      return utils.isArray(this.value);
    },

    total() {
      return this.max - this.min;
    },
  },

  watch: {
    value(value: number | number[]) {
      this.setCurrentValue(value);
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      disabled,
      range,
      readonly,
      total,
    } = this;
    const [start, end] = this.currentRange;

    return createElement(
      this.tag,

      {
        class: {
          'tc-slider': true,
          'tc-slider--readonly': readonly,
          'tc-slider--disabled': disabled,
        },

        on: this.$listeners,
      },

      [
        createElement(
          'input',

          {
            attrs: utils.assign({}, this.$attrs, {
              disabled,
              readonly,
              max: this.max,
              min: start,
              name: this.name,
              step: this.step,
              type: 'range',
              value: end,
            }),

            class: 'tc-slider__input',
          },
        ),
        createElement(
          'div',

          {
            class: 'tc-slider__bar',

            style: {
              left: range ? `${((start - this.min) / total) * 100}%` : '',
              width: `${((end - start) / total) * 100}%`,
            },
          },

          [
            !range || readonly ? '' : createElement(
              'button',

              {
                attrs: {
                  disabled,
                  'data-button': 'start',
                },

                class: 'tc-slider__button tc-slider__button--start',
              },
            ),
            readonly ? '' : createElement(
              'button',

              {
                attrs: {
                  disabled,
                  'data-button': 'end',
                },

                class: 'tc-slider__button tc-slider__button--end',
              },
            ),
          ],
        ),
      ],
    );
  },

  methods: {
    pointerDown(e: any) {
      if (this.disabled || this.readonly) {
        return;
      }

      if (e.target.tagName.toLowerCase() === 'button') {
        const pointer = e.changedTouches ? e.changedTouches[0] : e;

        this.button = e.target.dataset.button;
        this.pageX = pointer.pageX;
        this.startCurrentValue = this.currentValue;
        utils.addEventListener(
          document,
          EVENT_POINTER_MOVE,
          (this.onPointerMove = this.pointerMove.bind(this)),
        );
        utils.addEventListener(
          document,
          EVENT_POINTER_UP,
          (this.onPointerUp = this.pointerUp.bind(this)),
        );
      } else {
        const { currentRect, currentValue } = this;
        const value = ((e.clientX - currentRect.left) / currentRect.width) * this.total;

        this.slideTo(
          value,
          this.range && value < (currentValue[1] + currentValue[0]) / 2 ? 'start' : 'end',
        );
      }
    },

    pointerMove(e: any) {
      if (!this.button) {
        return;
      }

      e.preventDefault();

      const pointer = e.changedTouches ? e.changedTouches[0] : e;
      const moveX = pointer.pageX - this.pageX;

      if (moveX) {
        const { step } = this;
        const value = (moveX / this.currentRect.width) * this.total;

        if (Math.abs(value) >= step) {
          this.slide(value, this.button);
          this.pageX = pointer.pageX;
        }
      }
    },

    pointerUp() {
      if (!this.button) {
        return;
      }

      this.button = '';
      utils.removeEventListener(document, EVENT_POINTER_MOVE, this.onPointerMove);
      utils.removeEventListener(document, EVENT_POINTER_UP, this.onPointerUp);

      if (this.currentValue !== this.startCurrentValue) {
        this.$emit('change', this.currentValue, this.startCurrentValue);
      }
    },

    slide(offset: number = this.step, button: string = 'end') {
      const [start, end] = this.currentRange;

      this.slideTo(
        (
          button === 'start' ?
            Math.min(start + offset, end) :
            Math.max(end + offset, start)
        ),
        button,
      );
    },

    slideTo(value: number, button: string = 'end') {
      const { step } = this;
      let [start, end] = this.currentRange;

      value = Math.round(value / step) * step;

      if (button === 'start') {
        start = Math.max(value, this.min);
      } else {
        end = Math.min(value, this.max);
      }

      this.setCurrentValue(this.range ? [start, end] : end, 'input');
    },

    setCurrentRect() {
      this.currentRect = this.$el.getBoundingClientRect();
    },

    setCurrentValue(value: any, event?: string) {
      const { max, min, range } = this;
      let start = range ? value[0] : min;
      let end = range ? value[1] : value;

      start = Math.max(utils.isUndefined(start) ? min : start, min);
      end = Math.min(utils.isUndefined(end) ? max : end, max);

      this.oldCurrentValue = this.currentValue;
      this.currentRange = [start, end];
      this.currentValue = range ? [start, end] : end;

      if (event) {
        this.$emit(event, this.currentValue, this.oldCurrentValue);
      }
    },
  },

  mounted() {
    this.setCurrentValue(this.value);
    this.setCurrentRect();
    utils.addEventListener(window, 'resize', (this.onResize = this.setCurrentRect.bind(this)));
    utils.addEventListener(
      this.$el,
      EVENT_POINTER_DOWN,
      (this.onPointerDown = this.pointerDown.bind(this)),
    );
  },

  beforeDestroy() {
    utils.removeEventListener(window, 'resize', this.onResize);
    utils.removeEventListener(this.$el, EVENT_POINTER_DOWN, this.onPointerDown);
  },
};
