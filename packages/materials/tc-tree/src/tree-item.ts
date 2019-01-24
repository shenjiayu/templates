import { Component, CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';

export default {
  name: 'tc-tree-item',

  props: {
    content: null,
    disabled: Boolean,
    expandable: Boolean,
    expanded: Boolean,
    indeterminate: Boolean,
    index: Number,
    indexes: Array,
    loading: Boolean,
    parent: Object,
    raw: Object,
    selectable: Boolean,
    selected: Boolean,

    tag: {
      type: String,
      default: 'li',
    },
  },

  render(createElement: CreateElement): VNode {
    const { content, loading } = this;
    const component: Component = {};

    if (utils.isObject(content)) {
      utils.assign(component, content);
    } else if (utils.isFunction(content)) {
      component.render = h => content.call(this, h, this.raw, this.parent.raw);
    } else {
      component.template = `<span>${content}</span>`;
    }

    return createElement(
      this.tag,

      {
        attrs: {
          'data-index': this.index,
          'data-indexes': JSON.stringify(this.indexes),
          role: 'treeitem',
        },

        class: {
          'tc-tree__item': true,
          'tc-tree__item--disabled': this.disabled,
          'tc-tree__item--expandable': this.expandable,
          'tc-tree__item--expanded': this.expanded,
          'tc-tree__item--selected': this.selected,
        },
      },

      [
        createElement(
          'div',

          {
            class: 'tc-tree__content',
          },

          [
            this.expandable ? createElement(
              'button',

              {
                attrs: {
                  'aria-controls': `tc-tree__collapse-${this.indexes.join('-')}`,
                  'aria-expanded': this.expanded,
                  disabled: loading,
                  type: 'button',
                },

                class: {
                  'tc-tree__button': true,
                  'tc-tree__button--loading': loading,
                  'tc-tree__button--rotated': this.expanded,
                },

                on: {
                  click: () => {
                    this.$emit('expand');
                  },
                },
              },

              [
                createElement(
                  'tc-icon',

                  {
                    props: loading ? {
                      type: 'loader',
                    } : {
                      fill: 'currentColor',
                      type: 'play',
                    },
                  },
                ),
              ],
            ) : '',

            this.selectable ? createElement(
              'tc-checkbox',

              {
                class: 'tc-tree__checkbox',

                props: {
                  checked: this.selected,
                  disabled: this.disabled,
                  indeterminate: this.indeterminate,
                },

                on: {
                  change: () => {
                    this.$emit('select');
                  },
                },
              },
            ) : '',

            createElement(component, {
              nativeOn: this.disabled ? {} : {
                click: () => {
                  this.$emit('click');
                },
              },
            }),
          ],
        ),
      ].concat(this.$slots.default),
    );
  },
};
