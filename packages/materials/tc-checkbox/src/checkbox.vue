<template>
  <label class="tc-checkbox" :class="{
    'tc-checkbox--disabled': disabled,
  }" v-on="listeners">
    <input type="checkbox" class="tc-checkbox__input" ref="input" :name="name" :value="value" :checked="isChecked" :disabled="disabled" @change="change" v-bind="$attrs">
    <span class="tc-checkbox__indicator"></span>
    <slot></slot>
  </label>
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-checkbox',

    inheritAttrs: false,

    model: {
      prop: 'checkedValue',
      event: 'change',
    },

    props: {
      checkedValue: null,
      checked: Boolean,
      disabled: Boolean,
      indeterminate: Boolean,
      name: String,
      value: {
        default: 'on',
      },
    },

    computed: {
      isChecked() {
        const { value: currentValue, checkedValue } = this;
        let { checked } = this;

        if (utils.isArray(checkedValue)) {
          checked = utils.includes(currentValue, checkedValue);
        } else if (utils.isBoolean(checkedValue)) {
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
       * @param {Event} event - The event object.
       */
      change({ target }) {
        const { value: currentValue, checkedValue } = this;
        const { checked } = target;
        let { value } = target;

        if (utils.isArray(checkedValue)) {
          const index = checkedValue.indexOf(currentValue);

          value = checkedValue.slice();

          if (checked) {
            if (index === -1) {
              value.push(currentValue);
            }
          } else if (index !== -1) {
            value.splice(index, 1);
          }
        } else if (utils.isBoolean(checkedValue)) {
          value = checked;
        } else if (!utils.isUndefined(checkedValue)) {
          value = checkedValue === currentValue;
        }

        this.$emit('change', value, checkedValue);
      },

      /**
       * Set the indeterminate value of the built-in checkbox input.
       */
      setIndeterminate() {
        this.$refs.input.indeterminate = this.indeterminate;
      },
    },

    watch: {
      indeterminate() {
        this.setIndeterminate();
      },
    },

    mounted() {
      this.setIndeterminate();
    },
  };
</script>
