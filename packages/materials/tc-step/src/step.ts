import { CreateElement, VNode } from 'vue';

export default {
  name: 'tc-step',

  model: {
    prop: 'currentStep',
    event: 'change',
  },

  data() {
    return {
      min: 1,
    };
  },

  props: {
    currentStep: {
      type: Number,
      default: 1,
    },

    currentStatus: {
      type: String,
      default: 'process',
    },

    finishedStatus: {
      type: String,
      default: 'finish',
    },

    pendingStatus: {
      type: String,
      default: 'wait',
    },

    tag: {
      type: String,
      default: 'ol',
    },

    vertical: Boolean,
  },

  computed: {
    max() {
      return this.$children.length;
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,

      {
        attrs: {
          role: 'navigation',
        },

        class: {
          'tc-step': true,
          'tc-step--vertical': this.vertical,
        },

        on: this.$listeners,
      },

      this.$slots.default,
    );
  },

  watch: {
    currentStep() {
      this.update();
    },
  },

  mounted() {
    this.update();
  },

  methods: {
    prev(loop = false) {
      let step = this.currentStep - 1;

      if (loop && step < this.min) {
        step = this.max;
      }

      if (step >= this.min) {
        this.$emit('change', step);
      }
    },

    next(loop = false) {
      let step = this.currentStep + 1;

      if (loop && step > this.max) {
        step = this.min;
      }

      if (step <= this.max) {
        this.$emit('change', step);
      }
    },

    update() {
      const { currentStep } = this;

      this.$children.forEach((child: any, index: number) => {
        const step = index + 1;
        let status = this.currentStatus;
        let active = true;

        if (step < currentStep) {
          status = this.finishedStatus;
          active = false;
        } else if (step > currentStep) {
          status = this.pendingStatus;
          active = false;
        }

        child.active = active;
        child.initialStatus = status;
        child.initialSign = index + 1;
      });
    },
  },
};
