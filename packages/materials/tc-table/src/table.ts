import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';
import {
  TableSectionData,
  TableRowData,
  TableCellData,
  TableColgroupData,
} from './table.d';
import TableSection from './table-section';

export default {
  name: 'tc-table',

  components: {
    [TableSection.name]: TableSection,
  },

  data() {
    return {
      sections: [],
    };
  },

  model: {
    prop: 'selectedRows',
    event: 'change',
  },

  props: {
    bordered: Boolean,
    caption: String,
    colgroup: Array,
    controls: Boolean,
    data: Array,
    disabledRows: Array,
    hoverable: Boolean,
    multiple: Boolean,
    responsive: Boolean,
    selectable: Boolean,
    selectedRows: Array,
    size: String,
    striped: Boolean,

    tag: {
      type: String,
      default: 'table',
    },
  },

  render(createElement: CreateElement): VNode {
    const { caption, colgroup, size } = this;
    const children = [];

    if (caption) {
      children.push(createElement('caption', {
        domProps: {
          textContent: caption,
        },
      }));
    }

    if (colgroup) {
      children.push(createElement(
        'colgroup',
        colgroup.map((col: TableColgroupData, index: number): VNode => createElement(
          'col',

          {
            attrs: {
              span: col.span,
            },

            key: index,
            style: col.style,
          },
        )),
      ));
    }

    return createElement(
      this.tag,

      {
        class: {
          'tc-table': true,
          'tc-table--bordered': this.bordered,
          'tc-table--hoverable': this.hoverable,
          'tc-table--selectable': this.selectable,
          'tc-table--multiple': this.multiple,
          'tc-table--controls': this.controls,
          'tc-table--responsive': this.responsive,
          'tc-table--striped': this.striped,
          [`tc-table--${size}`]: size,
        },

        on: this.$listeners,
      },

      children.concat(this.sections.map((section: TableSectionData, index: number) => createElement(
        TableSection.name,

        {
          key: index,
          props: section,
          style: section.style,
        },
      ))),
    );
  },

  methods: {
    init() {
      const {
        data,
        selectable,
        selectedRows = [],
        disabledRows = [],
      } = this;

      if (!utils.isArray(data)) {
        return;
      }

      const defaultTableSection: TableSectionData = {
        index: '',
        rows: [],
        tag: 'tbody',
      };
      let sections: TableSectionData[] = [];

      data.forEach((section: TableSectionData, index: number) => {
        if (utils.isObject(section)) {
          if (utils.isArray(section.rows)) {
            sections.push(utils.assign({
              index,
              rows: [],
              tag: 'tbody',
            }, section));
            return;
          }
        } else if (!utils.isArray(section)) {
          throw new Error(`Invalid table section: ${JSON.stringify(section)}`);
        }

        defaultTableSection.rows.push(section);

        if (!utils.includes(defaultTableSection, sections)) {
          sections.push(defaultTableSection);
        }
      });

      sections = sections.map((section: TableSectionData, sectionIndex: number) => {
        const $section: TableSectionData = {
          index: sectionIndex,
          rows: [],
          tag: 'tbody',
        };

        if (utils.isArray(section)) {
          $section.rows = section;
        } else if (utils.isObject(section)) {
          if (utils.isArray(section.rows)) {
            utils.assign($section, section);
          } else {
            utils.forEach(section, (row: TableRowData, rowIndex: number) => {
              $section.rows.push({
                cells: row,
                index: rowIndex,
              });
            });
          }
        } else {
          throw new Error(`Invalid table section: ${JSON.stringify(section)}`);
        }

        $section.rows = $section.rows.map((row: TableRowData, rowIndex: number) => {
          const $row: TableRowData = {
            cells: [],
            index: rowIndex,
            raw: row,
            indeterminate: false,
            selected: utils.includes(row, selectedRows),
            disabled: utils.includes(row, disabledRows),
            tag: 'tr',
          };

          if (utils.isArray(row)) {
            $row.cells = row;
          } else if (utils.isObject(row)) {
            if (utils.isArray(row.cells)) {
              utils.assign($row, row);
            } else {
              utils.forEach(row, (cell, cellIndex) => {
                $row.cells.push({
                  content: cell,
                  index: cellIndex,
                });
              });
            }
          } else {
            throw new Error(`Invalid table row: ${JSON.stringify(row)}`);
          }

          if (!selectable) {
            $row.selected = false;
          }

          $row.cells = $row.cells.map((cell: TableCellData, cellIndex: number) => {
            const $cell: TableCellData = {
              content: '',
              index: cellIndex,
              sortType: 0,
              tag: $section.tag === 'thead' ? 'th' : 'td',
            };

            if (utils.isObject(cell) && cell.content) {
              utils.assign($cell, cell);
            } else {
              $cell.content = cell;
            }

            return $cell;
          });

          return $row;
        });

        return $section;
      });

      this.sections = sections.sort((a: any, b: any): number => {
        const orders: any = {
          thead: 0,
          tbody: 1,
          tfoot: 2,
        };

        return orders[a.tag] - orders[b.tag];
      });

      this.select();
    },

    sort(index: number, sortType: number) {
      if (sortType > 2) {
        sortType = 0;
      }

      this.sections.forEach((section: TableSectionData) => {
        if (section.tag === 'thead') {
          section.rows.forEach((row: TableRowData) => {
            row.cells.forEach((cell: TableCellData, cellIndex: number) => {
              cell.sortType = cellIndex === index ? sortType : 0;
            });
          });
          return;
        }

        section.rows.sort(((a: TableRowData, b: TableRowData): number => {
          const cellA = a.cells[index];
          const cellB = b.cells[index];

          if (sortType > 0) {
            const cellAContent = cellA.content;
            const cellBContent = cellB.content;

            switch (sortType) {
              // Descending
              case 2:
                return [cellAContent, cellBContent].sort()[0] === cellAContent ? 1 : -1;

              // Ascending
              case 1:
                return [cellAContent, cellBContent].sort()[0] === cellAContent ? -1 : 1;

              default:
            }
          }

          return a.index - b.index;
        }));
      });
    },

    /**
     * Select a row or all rows.
     * @param {Array|Object|boolean} target - The target row or all rows if the value is `true`.
     * @param {*} reversed - Indicate if the operation is reversed (deselect) or not.
     */
    select(target: any, reversed: boolean = false) {
      if (!this.selectable) {
        return;
      }

      const { multiple } = this;
      const selectAll = multiple && target === true;
      const selectedRows: any = [];
      let totalRows = 0;
      let thead: any;

      this.sections.forEach((section: TableSectionData) => {
        switch (section.tag) {
          case 'thead':
            thead = section;
            break;

          case 'tbody':
            section.rows.forEach((row: TableRowData) => {
              totalRows += 1;

              if (row.disabled) {
                return;
              }

              if (!multiple && !utils.isUndefined(target)) {
                row.selected = false;
              }

              if (selectAll || row.raw === target) {
                row.selected = !reversed;
              }

              if (row.selected) {
                selectedRows.push(row.raw);
              }
            });
            break;

          // case 'tfoot':
          default:
        }
      });

      if (multiple && this.controls && thead) {
        const row = thead.rows[thead.rows.length - 1];
        const totalSelectedRows = selectedRows.length;

        if (totalSelectedRows === totalRows) {
          row.indeterminate = false;
          row.selected = true;
        } else if (totalSelectedRows > 0) {
          row.selected = false;
          row.indeterminate = true;
        } else {
          row.selected = false;
          row.indeterminate = false;
        }
      }

      if (!utils.isUndefined(target)) {
        this.$emit('change', selectedRows);
      }
    },
  },

  watch: {
    data() {
      this.init();
    },
  },

  mounted() {
    this.init();
  },
};
