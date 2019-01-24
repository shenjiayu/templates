<template>
  <select class="tc-select" :class="{
    'tc-select--inline': inline,
    [`tc-select--${sizes.custom}`]: sizes.custom,
  }" :size="sizes.native" @change="change" v-on="listeners">
    <option v-if="placeholder">{{ placeholder }}</option>
    <template v-for="(option, index) in list">
      <optgroup v-if="option.options" :key="index" :label="option.label" :disabled="option.disabled">
        <option v-for="(opt, i) in option.options" :key="i" :label="opt.label" :value="opt.value" :selected="opt.value === value || opt.selected" :disabled="opt.disabled">{{ opt.label !== undefined ? opt.label : opt.value }}</option>
      </optgroup>
      <option v-else :key="index" :label="option.label" :value="option.value" :selected="option.value === value || option.selected" :disabled="option.disabled">{{ option.label !== undefined ? option.label : option.value }}</option>
    </template>
    <slot></slot>
  </select>
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-select',

    model: {
      event: 'change',
    },

    data() {
      return {
        list: [],
      };
    },

    props: {
      inline: Boolean,
      options: [Array, Object],
      placeholder: String,
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
      // Initialize options data.
      init() {
        const parse = (options) => {
          const list = [];

          utils.forEach(options, (value, label) => {
            const item = {
              value,
              selected: false,
              disabled: false,
            };

            if (utils.isObject(value)) {
              if (utils.isArray(value.options)) {
                if (!utils.isUndefined(value.label)) {
                  item.label = value.label;
                }

                if (!utils.isUndefined(value.value)) {
                  item.value = value.value;
                }

                item.options = parse(value.options);
              } else {
                item.label = label;
                utils.assign(item, value);
              }
            }

            list.push(item);
          });

          return list;
        };

        this.list = parse(this.options);
      },

      /**
       * Change event handler.
       * @param {Event} event - The event object.
       */
      change(event) {
        this.$emit('change', event.target.value);
      },
    },

    watch: {
      options() {
        this.init();
      },
    },

    mounted() {
      this.init();
    },
  };
</script>
