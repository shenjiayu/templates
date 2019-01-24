import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-collapse',

  data() {
    return {
      transition: true,
      visible: false,
    };
  },

  props: {
    appear: Boolean,
    expanded: Boolean,

    tag: {
      type: String,
      default: 'div',
    },
  },

  watch: {
    expanded() {
      this.toggle();
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      'transition',

      {
        props: {
          name: this.transition ? 'tc-transition--collapse' : '',
        },

        on: {
          beforeEnter: (el: HTMLElement) => {
            el.style.height = '0';
            this.$emit('show');
          },

          enter: (el: HTMLElement) => {
            el.style.height = `${el.scrollHeight}px`;
          },

          afterEnter: (el: HTMLElement) => {
            el.style.height = '';
            this.$emit('shown');
          },

          beforeLeave: (el: HTMLElement) => {
            el.style.height = `${el.scrollHeight}px`;
            this.$emit('hide');
          },

          leave: (el: HTMLElement) => {
            el.offsetHeight;
            el.style.height = '0';
          },

          afterLeave: () => {
            this.$emit('hidden');
          },
        },
      },

      [
        createElement(
          this.tag,

          {
            class: 'tc-collapse',
            directives: [
              {
                name: 'show',
                oldValue: false,
                value: this.visible,
                expression: '',
                arg: '',
                modifiers: {},
              },
            ],
            on: this.$listeners,
          },

          this.$slots.default,
        ),
      ],
    );
  },

  methods: {
    show() {
      this.visible = true;
    },

    hide() {
      this.visible = false;
    },

    toggle() {
      this.visible = !this.visible;
    },
  },

  mounted() {
    if (this.expanded) {
      if (this.appear) {
        this.transition = true;
      } else {
        this.transition = false;
        this.$once('shown', () => {
          this.transition = true;
        });
      }

      this.show();
    }
  },
};
