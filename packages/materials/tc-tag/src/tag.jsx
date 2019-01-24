import Vue from 'vue';
import Component from 'vue-class-component';

@Component({ // eslint-disable-line
  props: {
    closable: Boolean,

    size: {
      type: String,
      default: 'md',
    },

    tag: {
      type: String,
      default: 'span',
    },

    type: String,

    visible: {
      type: Boolean,
      default: true,
    },
  },
})
export default class TCTag extends Vue {
  /**
   * emit closed event
   */
  afterLeave() {
    this.$emit('closed');
  }

  /**
   * emit close event
   */
  close() {
    this.$emit('close');
  }

  /**
   * render function
   * @return {Object} nodes
   */
  render() {
    const classNames = {
      'tc-tag': true,
      [`tc-tag--${this.type}`]: this.type,
      'tc-tag--closable': this.closable,
      [`tc-tag--${this.size}`]: this.size,
    };

    return (
      <transition
        name="tc-transition--fade"
        on-afterLeave={this.afterLeave}
      >
        {
          this.visible ?
            (
              <this.tag class={classNames}>
                {this.$slots.default}
                {
                  this.closable ?
                  (
                    <button
                      aria-label="close"
                      type="button"
                      class="tc-tag__close"
                      on-click={this.close}
                    >
                      <span aria-hidden="true" domPropsInnerHTML="&times;" />
                    </button>
                  ) : null
                }
              </this.tag>
            ) : null
        }
      </transition>
    );
  }
}
