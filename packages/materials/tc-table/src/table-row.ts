import { Component, CreateElement, VNode } from 'vue';
import { TableCellData } from './table.d';
import TableCell from './table-cell';

export default {
  name: 'tc-table-row',

  components: {
    [TableCell.name]: TableCell,
  },

  props: {
    cells: {
      type: Array,
      required: true,
    },

    disabled: Boolean,
    indeterminate: Boolean,
    index: null,
    raw: [Array, Object],
    selected: Boolean,

    tag: {
      type: String,
      default: 'tr',
    },
  },

  computed: {
    $table(): Component {
      return this.$parent.$parent;
    },

    inHeader(): boolean {
      return this.$parent.tag === 'thead';
    },

    selectable(): boolean {
      return this.$table.selectable;
    },

    multiple(): boolean {
      return this.$table.multiple;
    },

    controls(): boolean {
      return this.$table.controls;
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      selectable,
      multiple,
      controls,
      inHeader,
      indeterminate,
      selected,
      disabled,
    } = this;
    const cells = [...this.cells];

    if (selectable && controls) {
      cells.unshift({
        content: (h: CreateElement) => h(
          multiple ? 'tc-checkbox' : 'tc-radio',

          {
            props: {
              indeterminate,
              checked: selected,
              disabled: (!multiple && inHeader) || disabled,
            },
          },
        ),
      });
    }

    return createElement(
      this.tag,

      {
        class: {
          'tc-table__row': true,
          'tc-table__row--disabled': selectable && disabled && !inHeader,
          'tc-table__row--selected': selectable && selected && !controls && !inHeader,
        },

        on: {
          click: this.click,
        },
      },

      cells.map((cell: TableCellData, index: number): VNode => createElement(
        TableCell.name,

        {
          key: index,
          props: cell,
          style: cell.style,
        },
      )),
    );
  },

  methods: {
    click() {
      if (!this.selectable || this.disabled) {
        return;
      }

      const { $table, multiple } = this;

      if (this.inHeader) {
        if (multiple && this.controls) {
          $table.select(true, this.selected || this.indeterminate);
        }
      } else {
        $table.select(this.raw, multiple && this.selected);
      }
    },
  },
};
