<template>
  <label class="tc-switch" :class="{
    'tc-switch--disabled': disabled,
  }" v-on="listeners">
    <input type="checkbox" class="tc-switch__input" ref="input" :name="name" :value="value" :checked="isChecked" :disabled="disabled" @change="change" v-bind="$attrs">
    <span v-if="label" class="tc-switch__label tc-switch__label--left">{{ label }}</span>
    <span class="tc-switch__indicator" ref="indicator"></span>
    <span v-if="checkedLabel" class="tc-switch__label tc-switch__label--right">{{ checkedLabel }}</span>
  </label>
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-switch',

    inheritAttrs: false,

    model: {
      prop: 'checkedValue',
      event: 'change',
    },

    props: {
      checked: Boolean,
      checkedColor: String,
      checkedLabel: String,
      checkedLabelColor: String,
      checkedValue: null,
      color: String,
      disabled: Boolean,
      label: String,
      labelColor: String,
      name: String,
      value: {
        default: 'on',
      },
    },

    computed: {
      isChecked() {
        const { value: currentValue, checkedValue } = this;
        let { checked } = this;

        if (utils.isBoolean(checkedValue)) {
          checked = checkedValue;
        } else if (!utils.isUndefined(checkedValue)) {
          checked = checkedValue === currentValue;
        }

        return checked;
      },

      listeners() {
        const listeners = utils.assign({}, this.$listeners);

        delete listeners.change;

        return listeners;
      },
    },

    methods: {
      /**
       * Change event handler.
       * @param {Event} e - The event object.
       */
      change({ target }) {
        const { value: currentValue, checkedValue } = this;
        const { checked } = target;
        let { value } = target;

        if (utils.isBoolean(checkedValue)) {
          value = checked;
        } else if (!utils.isUndefined(checkedValue)) {
          value = checkedValue === currentValue;
        }

        this.setColor(checked);
        this.$emit('change', value, checkedValue);
      },

      /**
       * Set the indicator color.
       * @param {boolean} checked - Indicate if the switch is checked or not.
       */
      setColor(checked) {
        const { color, checkedColor } = this;
        const { style } = this.$refs.indicator;

        if (checked && checkedColor) {
          style.backgroundColor = checkedColor;
        } else {
          style.backgroundColor = color || '';
        }
      },
    },

    mounted() {
      this.setColor(this.isChecked);
    },
  };
</script>
