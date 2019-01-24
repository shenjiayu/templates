<template>
  <textarea class="tc-textarea" :value="currentValue" :rows="rowsAsNumber" @input="input" @change="change" v-on="listeners"></textarea>
</template>

<script>
  import * as utils from '../../tc-utils/src';

  export default {
    name: 'tc-textarea',

    model: {
      event: 'change',
    },

    props: {
      value: null,
      rows: {
        type: [Number, Array],
        default: 2,
      },
    },

    computed: {
      currentValue() {
        return !utils.isUndefined(this.value) ? this.value :
          utils.getChildrenTextContent(this.$slots.default);
      },

      isArrayRows() {
        return utils.isArray(this.rows);
      },

      rowsAsArray() {
        const { rows } = this;
        let minRows = 1;
        let maxRows = Infinity;

        if (this.isArrayRows) {
          minRows = Math.max(rows[0], minRows) || minRows;
          maxRows = Math.min(rows[1], maxRows) || maxRows;
          maxRows = Math.max(maxRows, minRows);
        }

        return [minRows, maxRows];
      },

      rowsAsNumber() {
        const { rows } = this;

        if (this.isArrayRows) {
          return this.rowsAsArray[0];
        }

        return Math.max(rows, 1);
      },

      maxHeight() {
        const maxRows = this.rowsAsArray[1];

        // 18 is the total height of border and padding
        // 20 is the line height
        return maxRows === Infinity ? maxRows : (18 + (maxRows * 20));
      },

      listeners() {
        const listeners = utils.assign({}, this.$listeners);

        delete listeners.change;

        return listeners;
      },
    },

    methods: {
      /**
       * Input event handler.
       * @param {Event} e - The event object.
       */
      input({ target }) {
        if (this.isArrayRows) {
          const { style } = target;

          target.style.height = 'auto';

          const { scrollHeight } = target;

          if (scrollHeight > target.clientHeight) {
            // 2 is the total height of border-top and border-bottom
            style.height = `${Math.min(scrollHeight + 2, this.maxHeight)}px`;
          }
        }
      },

      /**
       * Change event handler.
       * @param {Event} event - The event object.
       */
      change(event) {
        this.$emit('change', event.target.value);
      },
    },
  };
</script>
