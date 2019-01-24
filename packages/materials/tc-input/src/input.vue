<template>
  <input class="tc-input" :class="{
    [`tc-input--inline`]: inline,
    [`tc-input--${sizes.custom}`]: sizes.custom,
  }" :value="value" :size="sizes.native" @change="change" v-on="listeners">
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-input',

    model: {
      event: 'change',
    },

    props: {
      inline: Boolean,
      size: String,
      value: null,
    },

    computed: {
      listeners() {
        const listeners = utils.assign({}, this.$listeners);

        delete listeners.change;

        return listeners;
      },

      sizes() {
        const { size } = this;
        let custom;
        let native;

        if (utils.includes(size, ['small', 'large'])) {
          custom = size;
        } else {
          native = size;
        }

        return {
          custom,
          native,
        };
      },
    },

    methods: {
      /**
       * Change event handler.
       * @param {Event} event - The event object.
       */
      change(event) {
        this.$emit('change', event.target.value);
      },

      /**
       * Set value directly
       * @param {string} value - The new value.
       */
      setValue(value) {
        this.$el.value = value;
      },
    },
  };
</script>
