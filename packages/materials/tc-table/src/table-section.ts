import { CreateElement, VNode } from 'vue';
import { TableRowData } from './table.d';
import TableRow from './table-row';

export default {
  name: 'tc-table-section',

  components: {
    [TableRow.name]: TableRow,
  },

  props: {
    index: null,

    rows: {
      type: Array,
      required: true,
    },

    tag: {
      type: String,
      default: 'tbody',
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,

      {
        class: 'tc-table__section',
      },

      this.rows.map((row: TableRowData, index: number) => createElement(
        TableRow.name,

        {
          key: index,
          props: row,
          style: row.style,
        },
      )),
    );
  },
};
