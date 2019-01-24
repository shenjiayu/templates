<template>
  <div class="tc-number-input" :class="{
    'tc-number-input--inline': inline,
    'tc-number-input--center': center,
    'tc-number-input--controls': controls,
    [`tc-number-input--${size}`]: size,
  }" :value="value" v-on="listeners">
    <button v-if="controls" class="tc-number-input__button tc-number-input__button--minus" type="button" @click="decrease" :disabled="disabled || readonly || !decreasable"></button>
    <tc-input class="tc-number-input__input" ref="input" type="number" :name="name" :value="currentValue" :min="min" :max="max" :step="step" @change="change" @paste="paste" :readonly="readonly" :disabled="disabled || (!decreasable && !increasable)" v-bind="$attrs"></tc-input>
    <button v-if="controls" class="tc-number-input__button tc-number-input__button--plus" type="button" @click="increase" :disabled="disabled || readonly || !increasable"></button>
  </div>
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-number-input',

    inheritAttrs: false,

    data() {
      return {
        currentValue: NaN,
      };
    },

    model: {
      event: 'change',
    },

    props: {
      center: Boolean,
      controls: Boolean,
      disabled: Boolean,
      inline: Boolean,

      max: {
        type: Number,
        default: Infinity,
      },

      min: {
        type: Number,
        default: -Infinity,
      },

      name: String,
      readonly: Boolean,
      size: String,

      step: {
        type: Number,
        default: 1,
      },

      value: Number,
    },

    computed: {
      /**
       * Indicating if the value is increasable.
       * @returns {boolean} Returns `true` if it is decreasable, else `false`.
       */
      increasable() {
        const num = this.currentValue;

        return utils.isNaN(num) || num < this.max;
      },

      /**
       * Indicating if the value is decreasable.
       * @returns {boolean} Returns `true` if it is decreasable, else `false`.
       */
      decreasable() {
        const num = this.currentValue;

        return utils.isNaN(num) || num > this.min;
      },

      listeners() {
        const listeners = utils.assign({}, this.$listeners);

        delete listeners.change;

        return listeners;
      },
    },

    created() {
      if (this.min <= this.max) {
        this.currentValue = Math.min(this.max, Math.max(this.min, this.value));
      }
    },

    methods: {
      /**
       * Change event handler.
       * @param {string} value - The new value.
       */
      change(value) {
        this.setValue(Math.min(this.max, Math.max(this.min, value)));
      },

      /**
       * Paste event handler.
       * @param {Event} event - Event object.
       */
      paste(event) {
        if (!/^-?\d+$/.test(event.clipboardData.getData('text'))) {
          event.preventDefault();
        }
      },

      /**
       * Decrease the value.
       */
      decrease() {
        if (this.decreasable) {
          let { currentValue } = this;

          if (utils.isNaN(currentValue)) {
            currentValue = 0;
          }

          this.setValue(Math.min(this.max, Math.max(this.min, currentValue - this.step)));
        }
      },

      /**
       * Increase the value.
       */
      increase() {
        if (this.increasable) {
          let { currentValue } = this;

          if (utils.isNaN(currentValue)) {
            currentValue = 0;
          }

          this.setValue(Math.min(this.max, Math.max(this.min, currentValue + this.step)));
        }
      },

      /**
       * Set new value and dispatch change event.
       * @param {number} value - The new value to set.
       */
      setValue(value) {
        this.$nextTick(() => {
          this.$refs.input.setValue(value);
        });
        this.currentValue = value;
        this.$emit('change', value);
      },
    },
  };
</script>
