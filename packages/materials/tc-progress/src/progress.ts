import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-progress',

  props: {
    max: {
      type: Number,
      default: 1,
    },

    percentage: Boolean,

    tag: {
      type: String,
      default: 'div',
    },

    type: String,

    value: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    currentPercentage() {
      return `${Math.floor((Math.min(this.value, this.max) / this.max) * 100)}%`;
    },
  },

  render(createElement: CreateElement): VNode {
    const { type } = this;

    return createElement(
      this.tag,

      {
        class: 'tc-progress',
        on: this.$listeners,
      },

      [
        createElement(
          'div',

          {
            attrs: {
              role: 'progressbar',
              'aria-valuenow': this.value,
              'aria-valuemin': 0,
              'aria-valuemax': this.max,
            },

            class: {
              'tc-progress__bar': true,
              [`tc-progress__bar--${type}`]: type,
            },

            style: {
              width: this.currentPercentage,
            },
          },

          this.percentage ? [
            createElement(
              'span',

              {
                class: 'tc-progress__text',
              },

              [
                this.currentPercentage,
              ],
            ),
          ] : undefined,
        ),
      ],
    );
  },
};
