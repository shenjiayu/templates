import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';
import * as Cascader from './cascader.d';

export default {
  name: 'tc-cascader',

  model: {
    event: 'change',
  },

  data() {
    return {
      currentValue: [],
      isExpanded: false,
      root: {},
      filteredOptions: [],
      selectedOptions: [],
    };
  },

  props: {
    clearable: Boolean,

    changeTrigger: {
      type: String,
      default: 'change',
    },

    container: [String, utils.Window.Element],
    data: Array,

    debounce: {
      type: Number,
      default: 300,
    },

    disabled: Boolean,
    expanded: Boolean,

    expandTrigger: {
      type: String,
      default: 'click',
    },

    filterable: Boolean,

    format: {
      type: Function,
      default(options: Cascader.RawOption[]) {
        const map = (option: Cascader.RawOption) => (option.label || option.value);

        return options.map(map).join(' / ');
      },
    },

    inline: Boolean,
    inputId: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    size: String,
    value: Array,
  },

  render(createElement: CreateElement): VNode {
    const toggleClass = `tc-cascader__toggle-${this._uid}`;
    const innerId = `tc-cascader__inner-${this._uid}`;

    return createElement(
      'div',

      {
        class: {
          'tc-cascader': true,
          'tc-cascader--inline': this.inline,
          [`tc-cascader--${this.size}`]: this.size,
        },

        on: this.$listeners,
      },

      [
        this.$slots.default ? createElement(
          'div',

          {
            attrs: {
              'aria-expanded': this.isExpanded,
              'aria-haspopup': true,
              id: innerId,
            },

            class: {
              'tc-cascader__inner': true,
              [toggleClass]: true,
            },

            on: {
              click: this.click,
            },
          },

          this.$slots.default,
        ) : createElement(
          'div',

          {
            attrs: {
              id: innerId,
            },

            class: 'tc-cascader__inner',
          },

          [
            createElement(
              'input',

              {
                attrs: {
                  name: this.name,
                  type: 'hidden',
                  value: this.selectedOptions.map((option: Cascader.Option) => option.value),
                },

                class: 'tc-cascader__value',
              },
            ),

            createElement(
              'tc-input',

              {
                attrs: {
                  'aria-expanded': this.isExpanded,
                  'aria-haspopup': true,
                  autocomplete: 'off',
                  disabled: this.disabled,
                  id: this.inputId,
                  placeholder: this.placeholder,
                  readonly: this.readonly || !this.filterable,
                  value: this.format.call(
                    this,
                    this.selectedOptions.map((option: Cascader.Option) => option.raw),
                  ),
                },

                class: {
                  'tc-cascader__input': true,
                  'tc-cascader__input--readonly': this.readonly,
                  [toggleClass]: true,
                },

                on: (this.disabled || this.readonly) ? {} : {
                  click: this.click,
                  input: this.input,
                  keypress: this.keypress,
                },

                props: {
                  size: this.size,
                },
              },
            ),

            createElement(
              'span',

              {
                attrs: {
                  role: 'button',
                },

                class: {
                  'tc-cascader__arrow': true,
                  'tc-cascader__arrow--rotated': this.isExpanded,
                },

                on: {
                  click: this.click,
                },
              },

              [
                createElement(
                  'tc-icon',

                  {
                    props: {
                      strokeWidth: 1,
                      type: 'chevron-down',
                    },
                  },
                ),
              ],
            ),

            this.clearable && this.selectedOptions.length > 0 ? createElement(
              'span',

              {
                attrs: {
                  role: 'button',
                },

                class: 'tc-cascader__clear',

                on: {
                  click: this.clear,
                },
              },

              [
                createElement(
                  'tc-icon',

                  {
                    props: {
                      stroke: '#fff',
                      strokeWidth: 1,
                      type: 'x',
                    },
                  },
                ),
              ],
            ) : '',
          ],
        ),

        createElement(
          'tc-dropdown',

          {
            attrs: {
              'aria-labelledby': innerId,
              id: `tc-cascader__menu-${this._uid}`,
            },

            class: 'tc-cascader__menu',

            props: {
              container: this.container,
              disabled: this.disabled,
              placement: 'bottom-start',
              target: `.${toggleClass}`,
              trigger: 'manual',
              visible: this.isExpanded,
            },

            on: {
              hidden: this.filter,
              visibilitychange: this.toggle,
            },
          },

          this.filterable && !utils.isEmptyArray(this.filteredOptions) ? [createElement(
            'ul',

            {
              class: {
                'tc-cascader__list': true,
                'tc-cascader__list--fluid': this.filterable,
              },

              on: {
                click: this.stop,
              },
            },

            this.filteredOptions.map((option: Cascader.FilterOption) => createElement(
              'li',

              {
                class: 'tc-cascader__item',
                key: option.raw.uid,

                on: {
                  click: () => {
                    this.select(option.raw, true);
                  },
                },
              },

              [
                createElement(
                  'div',

                  {
                    class: 'tc-cascader__content',
                  },

                  [createElement(utils.createComponent(option.content, {
                    data: [
                      option.raw.raw,
                      option.raw.parent && option.raw.parent.raw,
                      option.raw.root && option.raw.root.raw,
                    ],
                  }))],
                ),
              ],
            )),
          )] : ((list: VNode[] = []) => {
            utils.recur(this.root, (option: Cascader.Option, next: Function) => {
              if (option.expandable && option.expanded) {
                list.push(createElement(
                  'ul',

                  {
                    attrs: {
                      'aria-labelledby': `tc-cascader__item-${option.uid}`,
                    },

                    class: 'tc-cascader__list',

                    on: {
                      click: this.stop,
                    },
                  },

                  option.children.map((child: Cascader.Option) => createElement(
                    'li',

                    {
                      attrs: {
                        'aria-haspopup': child.expandable,
                        'aria-expaned': child.expanded,
                        id: `tc-cascader__item-${child.uid}`,
                      },

                      class: {
                        'tc-cascader__item': true,
                        'tc-cascader__item--disabled': child.disabled,
                        'tc-cascader__item--expandable': child.expandable,
                        'tc-cascader__item--expanded': child.expanded,
                        'tc-cascader__item--loadable': child.loadable,
                        'tc-cascader__item--selected': child.selected,
                      },

                      key: child.uid,

                      on: ((listeners: any) => {
                        if (this.expandTrigger === 'hover') {
                          listeners.touchstart = () => {
                            this.expand(child);

                            if (child.expandable) {
                              this.select(child);
                            }
                          };

                          listeners[
                            utils.Window.PointerEvent ? 'pointerenter' : 'mouseenter'
                          ] = listeners.touchstart;
                        } else {
                          listeners.click = () => {
                            this.expand(child);
                            this.select(child);
                          };
                        }

                        return listeners;
                      })({
                        click: () => {
                          this.select(child);
                        },
                      }),
                    },

                    [
                      createElement(
                        'div',

                        {
                          class: 'tc-cascader__content',
                        },

                        [createElement(utils.createComponent(child.content, {
                          data: [
                            child.raw,
                            child.parent && child.parent.raw,
                            child.root && child.root.raw,
                          ],
                        }))],
                      ),

                      (child.expandable || child.loadable) ? createElement(
                        'tc-icon',

                        {
                          class: {
                            'tc-cascader__icon': true,
                            'tc-cascader__icon--rotating': child.loading,
                          },

                          props: {
                            size: 16,
                            strokeWidth: 1,
                            type: child.loading ? 'loader' : 'chevron-right',
                          },
                        },
                      ) : '',
                    ],
                  )),
                ));
              }

              next(option);
            });

            return list;
          })(),
        ),
      ],
    );
  },

  watch: {
    data() {
      this.init();
    },

    expanded(value: boolean) {
      this.isExpanded = value;
    },

    value(value: any[]) {
      this.initSelectedOptions(value);
    },
  },

  methods: {
    init() {
      utils.assign(this.root, {
        children: this.data,
        disabled: this.disabled,
      });

      this.root = this.normalize(this.root);
      this.initSelectedOptions();
    },

    normalize(
      target: Cascader.RawOption,
      targetParent: Cascader.Option | null = null,
    ): Cascader.Option {
      return utils.recur(target, (
        raw: Cascader.RawOption,
        next: Function,
        { index, parent }: any,
      ): Cascader.Option => {
        const hasChildren = !utils.isEmptyArray(raw.children);
        const label = raw.label || raw.value;
        const loadable = utils.isFunction(raw.children);
        const option: Cascader.Option = utils.assign({
          children: null,
          disabled: false,
          loading: false,
          value: '',
        }, raw, {
          index,
          label,
          loadable,
          parent,
          content: raw.content || raw.label || raw.value,
          expandable: hasChildren,
          expanded: !parent,
          isRoot: !parent,
          isEnd: !hasChildren && !loadable,
          raw: parent ? raw : null,
          root: parent ? parent.root : null,
          selected: parent ? false : hasChildren,
          uid: utils.uid(),
        });

        if (!option.root && parent && !parent.raw) {
          option.root = option;
        }

        if (hasChildren) {
          option.children = next(option);
        }

        return option;
      }, {
        parent: targetParent,
      });
    },

    initSelectedOptions(value = this.value) {
      if (utils.isEmptyArray(value)) {
        return;
      }

      const selectedOptions: Cascader.Option[] = [];
      let option = this.root;

      value.forEach((value1: any) => {
        if (!utils.isEmptyArray(option.children)) {
          option.children.forEach((child: Cascader.Option) => {
            if (child.value === value1) {
              option = child;
              option.selected = true;

              if (option.expandable) {
                option.expanded = true;
              }

              selectedOptions.push(option);
            }
          });
        }
      });

      this.currentValue = selectedOptions.map((option1: Cascader.Option) => option1.value);
      this.selectedOptions = selectedOptions;
    },

    expand(target: Cascader.Option) {
      if (this.disabled || target.disabled || target.expanded) {
        return;
      }

      if (target.loadable) {
        target.loading = true;
        target.children.call(this, (children: Cascader.RawOption[]) => {
          target.loadable = false;
          target.loading = false;
          target.expandable = !utils.isEmptyArray(children);
          target.children = children
            .map((child: Cascader.RawOption) => this.normalize(child, target));
          this.$nextTick(() => {
            this.expand(target);
          });
        });
        return;
      }

      if (target.parent) {
        target.parent.children.forEach((child: any) => utils.recur(child, (
          option: Cascader.Option,
          next: Function,
        ) => {
          if (option !== target) {
            if (option.expandable) {
              option.expanded = false;
            }

            next(option);
          }
        }));
      }

      if (target.expandable) {
        target.expanded = true;
      }
    },

    select(target: Cascader.Option, isFilteredOption: boolean = false) {
      if (this.disabled || target.disabled || target.selected) {
        return;
      }

      const selectedOptions = [];
      let selectedOption: Cascader.Option | null = target;

      while (selectedOption) {
        if (selectedOption.isRoot) {
          break;
        }

        if (selectedOption.parent) {
          selectedOption.parent.children.forEach((child: any) => utils.recur(child, (
            option: Cascader.Option,
            next: Function,
          ) => {
            if (option !== selectedOption) {
              option.expanded = false;
              option.selected = false;
              next(option);
            }
          }));
        }

        if (selectedOption.expandable) {
          selectedOption.expanded = true;
        }

        selectedOption.selected = true;
        selectedOptions.unshift(selectedOption);
        selectedOption = selectedOption.parent;
      }

      const newValue = selectedOptions.map((option: Cascader.Option) => option.value);
      const oldValue = this.currentValue;

      this.currentValue = newValue;
      this.$emit('select', newValue, oldValue);

      if (isFilteredOption || this.changeTrigger === 'select' || target.isEnd) {
        this.selectedOptions = selectedOptions;
        this.$emit('change', newValue, oldValue);

        if (isFilteredOption || target.isEnd) {
          this.isExpanded = false;
        }
      }
    },

    filter(value: string = '') {
      const filteredOptions: Cascader.FilterOption[] = [];

      value = value.trim();

      if (value) {
        const pattern = new RegExp(value, 'i');
        const changeOnSelect = this.changeTrigger === 'select';
        const addFilteredOptions = (option: Cascader.Option) => {
          const options: Cascader.Option[] = [option];
          let { parent } = option;

          while (parent && parent.raw) {
            options.unshift(parent);
            ({ parent } = parent);
          }

          filteredOptions.push({
            content: String(this.format.call(
              this,
              options.map((option1: Cascader.Option) => option1.raw),
            )).replace(
              pattern,
              (matched: string) => `<em class="tc-cascader__keyword">${matched}</em>`,
            ),
            raw: option,
          });
        };

        utils.recur(this.root, (option: Cascader.Option, next: Function) => {
          if (pattern.test([option.label, option.value, option.content].join())) {
            if (!option.expandable) {
              addFilteredOptions(option);
            } else {
              if (changeOnSelect) {
                addFilteredOptions(option);
              }

              option.children.forEach((child: Cascader.Option) => {
                utils.recur(child, (child1: Cascader.Option, next1: Function) => {
                  if (!child1.expandable) {
                    addFilteredOptions(child1);
                  } else {
                    if (changeOnSelect) {
                      addFilteredOptions(child1);
                    }

                    next1(child1);
                  }
                });
              });
            }
          } else {
            next(option);
          }
        });

        filteredOptions.sort((
          a: Cascader.FilterOption,
          b: Cascader.FilterOption,
        ) => a.content.length - b.content.length);

        this.toggle(filteredOptions.length > 0);
      }

      this.filteredOptions = filteredOptions;
    },

    toggle(visible?: boolean) {
      this.isExpanded = utils.isUndefined(visible) ? !this.isExpanded : visible;
    },

    click() {
      this.toggle();
    },

    clear() {
      const newValue: any[] = [];
      const oldValue = this.currentValue;

      this.selectedOptions.forEach((option: Cascader.Option) => {
        option.selected = false;
        option.expanded = false;
      });
      this.currentValue = newValue;
      this.selectedOptions = [];
      this.$emit('change', newValue, oldValue);
    },

    keypress(e: any) {
      if (!this.filterable) {
        e.preventDefault();
      }
    },

    input(e: any) {
      if (!this.filterable) {
        return;
      }

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.filter(e.target.value);
      }, this.debounce);
    },

    stop(e: Event) {
      e.stopPropagation();
    },
  },

  created() {
    this.init();
  },
};
