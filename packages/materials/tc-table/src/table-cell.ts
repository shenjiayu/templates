import { Component, CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-table-cell',

  props: {
    colSpan: Number,
    content: null,
    headers: String,
    index: null,
    rowSpan: Number,
    scope: String,
    sortable: Boolean,
    sortType: {
      type: Number,

      // 0: default, 1: ascending, 2: descending
      default: 0,
    },

    tag: {
      type: String,
      default: 'td',
    },
  },

  computed: {
    $table(): Component {
      return this.$parent.$parent.$parent;
    },
  },

  render(createElement: CreateElement): VNode {
    const {
      content,
      sortType,
      sortable,
    } = this;
    const component: Component = {};

    if (utils.isObject(content)) {
      utils.assign(component, content);
    } else if (utils.isFunction(content)) {
      component.render = h => content.call(this, h, this);
    } else {
      component.template = `<span>${content}</span>`;
    }

    return createElement(
      this.tag,

      {
        attrs: {
          colSpan: this.colSpan,
          headers: this.headers,
          rowSpan: this.rowSpan,
          scope: this.scope,
        },

        class: {
          'tc-table__cell': true,
          'tc-table__cell--sortable': sortable,
          'tc-table__cell--ascended': sortable && sortType === 1,
          'tc-table__cell--descended': sortable && sortType === 2,
        },

        on: sortable ? {
          click: this.click,
        } : {},
      },

      [
        createElement(
          'div',

          {
            class: 'tc-table__content',
          },

          [
            createElement(component),
            sortable ? createElement(
              'i',

              {
                class: 'tc-table__icon tc-table__icon--sort',
              },

              [
                createElement(
                  'span',

                  {
                    attrs: {
                      'data-sort-type': 1,
                    },
                  },
                ),
                createElement(
                  'span',

                  {
                    attrs: {
                      'data-sort-type': 2,
                    },
                  },
                ),
              ],
            ) : '',
          ],
        ),
      ],
    );
  },

  methods: {
    click({ target }: any) {
      if (this.sortable) {
        let sortType = target.getAttribute('data-sort-type');

        if (sortType === null) {
          sortType = this.sortType + 1;
        } else {
          sortType = Number(sortType);
        }

        this.$table.sort(this.index, sortType);
      }
    },
  },
};
