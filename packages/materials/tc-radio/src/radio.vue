<template>
  <label class="tc-radio" :class="{
    'tc-radio--disabled': disabled,
  }" v-on="listeners">
    <input type="radio" class="tc-radio__input" :name="name" :value="value" :checked="isChecked" :disabled="disabled" @change="change" v-bind="$attrs">
    <span class="tc-radio__indicator"></span>
    <slot></slot>
  </label>
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-radio',

    inheritAttrs: false,

    model: {
      prop: 'checkedValue',
      event: 'change',
    },

    props: {
      checked: Boolean,
      checkedValue: null,
      disabled: Boolean,
      name: String,
      value: {
        default: 'on',
      },
    },

    computed: {
      isChecked() {
        const { checkedValue } = this;
        let { checked } = this;

        if (!utils.isUndefined(checkedValue)) {
          checked = checkedValue === this.value;
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
       */
      change() {
        this.$emit('change', this.value, this.checkedValue);
      },
    },
  };
</script>
