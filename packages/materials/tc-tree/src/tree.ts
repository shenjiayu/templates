import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';
import { TreeNodeData } from './tree.d';
import TreeList from './tree-list';
import TreeItem from './tree-item';

/**
 * Recur a deep object with the specific key.
 * @param {Object} node - The object to recur.
 * @param {Function} callback - The object to recur.
 * @param {Object} [options={}] - The object to recur.
 * @returns {Object} The text content.
 */
function climb(node: TreeNodeData, callback: Function, options: any = {}) {
  return callback(
    node,
    (parent: any) => parent.children && parent.children.map((
      child: TreeNodeData,
      index: number,
    ) => climb(child, callback, {
      index,
      parent,
    })),
    options,
  );
}

const baseNode: TreeNodeData = {
  children: undefined,
  collapsible: false,
  content: '',
  disabled: false,
  expandable: false,
  expanded: false,
  indeterminate: false,
  index: 0,
  indexes: [0],
  isRoot: false,
  loading: false,
  parent: undefined,
  raw: undefined,
  selectable: false,
  selected: false,
};

export default {
  name: 'tc-tree',

  components: {
    [TreeList.name]: TreeList,
    [TreeItem.name]: TreeItem,
  },

  data() {
    return {
      root: {},
    };
  },

  props: {
    accordion: Boolean,
    clickAction: String,

    collapsible: {
      type: Boolean,
      default: true,
    },

    data: Array,
    disabled: Boolean,
    expanded: Boolean,
    guides: Boolean,
    hoverable: Boolean,
    selectable: Boolean,
    selected: Boolean,

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement: CreateElement): VNode {
    const { root } = this;

    return createElement(
      this.tag,

      {
        attrs: {
          role: 'tree',
        },

        class: {
          'tc-tree': true,
          'tc-tree--collapsible': this.collapsible,
          'tc-tree--guides': this.guides,
          'tc-tree--hoverable': this.hoverable,
        },

        on: this.$listeners,
      },

      (this.$slots.default || []).concat(utils.isEmptyArray(root.children) ? undefined : [
        createElement(
          TreeList.name,

          {
            props: root,
          },

          root.children.map((child: any) => climb(child, (
            node: any,
            next: Function,
          ) => createElement(
            TreeItem.name,

            {
              key: node.index,
              props: node,
              style: node.style,

              on: {
                click: () => {
                  this.action(node);
                },

                expand: () => {
                  this.expand(node);
                },

                select: () => {
                  this.select(node);
                },
              },
            },

            utils.isEmptyArray(node.children) ? undefined : [
              createElement(
                TreeList.name,

                {
                  props: node,
                },

                next(node),
              ),
            ],
          ))),
        ),
      ]),
    );
  },

  watch: {
    data() {
      this.init();
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      const {
        collapsible,
        selectable,
      } = this;

      this.root = this.normalize(utils.assign({}, baseNode, {
        collapsible,
        selectable,
        children: this.data,
        disabled: selectable && this.disabled,
        expanded: collapsible && this.expanded,
        isRoot: true,
        selected: selectable && this.selected,
      }));
    },

    normalize(node: any) {
      const {
        collapsible,
        root,
        selectable,
      } = this;

      return climb(node, (
        current: TreeNodeData,
        next: Function,
        options: any,
      ) => {
        const { index, parent } = options;
        const hasChildren = !utils.isEmptyArray(current.children);
        const clone = utils.assign({}, baseNode, current, {
          index,
          parent,
          selectable,
          collapsible: collapsible && !current.isRoot,
          indexes: parent && parent.indexes ? parent.indexes.concat([index]) : [0],
          isRoot: !!current.isRoot,
          expandable: collapsible && (hasChildren || utils.isFunction(current.children)),
          expanded: collapsible && hasChildren && (
            utils.isBoolean(current.expanded) ? current.expanded : (node.expanded || root.expanded)
          ),
          selected: selectable && (current.selected || node.selected || root.selected),
          disabled: selectable && (current.disabled || node.disabled || root.disabled),
          raw: current.isRoot ? undefined : current,
        });

        if (this.accordion && index > 0) {
          clone.expanded = false;
        }

        if (hasChildren) {
          clone.children = next(clone);
        } else {
          setTimeout(() => {
            this.propagateUpward(clone);
          }, 0);
        }

        return clone;
      });
    },

    action(node: any) {
      switch (this.clickAction) {
        case 'expand':
          this.expand(node);
          break;

        case 'select':
          this.select(node);
          break;

        default:
      }
    },

    expand(node: any) {
      if (this.disabled || node.disabled) {
        return;
      }

      if (utils.isFunction(node.children)) {
        node.loading = true;
        node.children.call(this, (children: TreeNodeData[]) => {
          node.loading = false;
          node.children = children.map((child: TreeNodeData) => this.normalize(child));
          this.$nextTick(() => {
            this.expand(node);
          });
        });
        return;
      }

      node.expanded = !node.expanded;

      if (this.accordion) {
        node.parent.children.forEach((child: any) => {
          if (child !== node) {
            child.expanded = false;
          }
        });
      }

      this.dispatch('expand', node);
      this.dispatch('change', node);
    },

    select(node: any) {
      if (this.disabled || node.disabled) {
        return;
      }

      const selected = node.indeterminate || !node.selected;

      node.indeterminate = false;
      node.selected = selected;
      this.propagateDownward(node, selected);
      this.propagateUpward(node);
      this.dispatch('select', node);
      this.dispatch('change', node);
    },

    propagateDownward(node: any, selected: boolean = false) {
      if (!node || !utils.isArray(node.children)) {
        return;
      }

      node.children.forEach((child: any) => {
        child.indeterminate = false;
        child.selected = selected;
        this.propagateDownward(child, selected);
      });
    },

    propagateUpward(node: any) {
      if (!node || !node.parent) {
        return;
      }

      node = node.parent;

      if (node && utils.isArray(node.children)) {
        let selectedCount = 0;
        let indeterminateCount = 0;

        node.children.forEach((child: any) => {
          selectedCount += child.selected ? 1 : 0;
          indeterminateCount += child.indeterminate ? 1 : 0;
        });

        if (selectedCount === node.children.length) {
          node.indeterminate = false;
          node.selected = true;
        } else if (selectedCount > 0) {
          node.selected = false;
          node.indeterminate = true;
        } else {
          node.selected = false;
          node.indeterminate = indeterminateCount > 0;
        }
      }

      this.propagateUpward(node);
    },

    dispatch(event: string, node: any) {
      let data;

      switch (event) {
        case 'expand':
          data = node.expanded;
          break;

        case 'select':
          data = node.selected;
          break;

        case 'change':
          data = {
            expanded: node.expanded,
            selected: node.selected,
          };
          break;

        default:
      }

      this.$emit(event, node.raw, data);
    },

    getExpandedNodes() {
      const expandedNodes: TreeNodeData[] = [];

      climb(this.root, (
        node: TreeNodeData,
        next: Function,
      ) => {
        if (node.expanded && !node.isRoot) {
          if (node.raw) {
            expandedNodes.push(node.raw);
          }
        } else {
          next(node);
        }
      });

      return expandedNodes;
    },

    getSelectedNodes() {
      const selectedNodes: TreeNodeData[] = [];

      climb(this.root, (
        node: TreeNodeData,
        next: Function,
      ) => {
        if (node.selected && !node.isRoot) {
          if (node.raw) {
            selectedNodes.push(node.raw);
          }
        } else {
          next(node);
        }
      });

      return selectedNodes;
    },

    getData() {
      return this.root.children.map((child: TreeNodeData) => climb(child, (
        current: TreeNodeData,
        next: Function,
      ) => utils.assign({}, current.raw, {
        expanded: current.expanded,
        selected: current.selected,
        children: utils.isEmptyArray(current.children) ? undefined : next(current),
      })));
    },
  },
};
