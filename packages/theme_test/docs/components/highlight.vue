<template>
  <div class="highlight" :class="{
    'highlight--expanded': expanded,
    'highlight--fulled': fulled,
  }">
    <div class="highlight__actions">
      <tc-button v-if="!fulled" type="link" size="small" :title="expanded ? 'Collapse' : 'Expand'" :icon="expanded ? 'chevron-up' : 'chevron-down'" @click="expand" rounded></tc-button>
      <tc-button type="link" size="small" :title="fulled ? 'Exit Fullscreen' : 'Enter Fullscreen'" :icon="fulled ? 'minimize' : 'maximize'" @click="full" rounded></tc-button>
      <tc-button ref="copy" :type="copied ? 'success' : 'link'" size="small" title="Copy" :icon="copied ? 'check' : 'copy'" rounded></tc-button>
      <tc-button type="link" size="small" title="Open in CodePen" icon="codepen" @click="edit" rounded></tc-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import 'highlight.js/styles/github.css';
  import hljs from 'highlight.js/lib/highlight';
  import xml from 'highlight.js/lib/languages/xml';
  import css from 'highlight.js/lib/languages/css';
  import javascript from 'highlight.js/lib/languages/javascript';
  import Clipboard from 'clipboard';

  hljs.configure({
    languages: [
      'xml',
      'css',
      'javascript',
    ],
  });
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('javascript', javascript);

  export default {
    data() {
      return {
        copied: false,
        expanded: false,
        fulled: false,
      };
    },

    mounted() {
      const code = this.$el.querySelector('code');
      const button = this.$refs.copy.$el;

      const clipboard = new Clipboard(button, {
        text: () => code.textContent,
      });

      clipboard.on('success', (event) => {
        event.clearSelection();
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      });

      hljs.highlightBlock(code);
    },

    methods: {
      expand() {
        this.$el.style.transitionProperty = 'height';
        this.$el.style.height = this.expanded ? '4rem' : `${this.$el.scrollHeight / 16}rem`;
        this.expanded = !this.expanded;
      },

      full() {
        this.$el.style.transitionProperty = 'none';
        this.fulled = !this.fulled;

        if (this.fulled) {
          window.addEventListener('keydown', (this.onKeydown = this.keydown.bind(this)));
        } else {
          window.removeEventListener('keydown', this.onKeydown);
        }
      },

      edit() {
        const { $el } = this;
        const { body } = $el.ownerDocument;
        const code = $el.querySelector('code').textContent;
        const template = (matched => (matched ? matched[1] : ''))(code.match(/<template[^>]*>([\s\S]+)<\/template>/));
        const style = (matched => (matched ? matched[1] : ''))(code.match(/<style[^>]*>([\s\S]+)<\/style>/));
        const script = (matched => (matched ? matched[1] : ''))(code.match(/<script[^>]*>([\s\S]+)<\/script>/));
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');
        const mount = (component) => {
          if (!component) {
            return `
new Vue({
  el: '#app',
});`;
          }

          return component
            .replace('import feather from \'feather-icons\';', 'const feather = Eks.feather')
            .replace(/export default \{([\s\S]*)\};\s+$/, `
new Vue({
   el: '#app',
$1
});`);
        };

        form.action = 'https://codepen.io/pen/define';
        form.method = 'post';
        form.target = '_blank';
        input.type = 'hidden';
        input.name = 'data';
        input.value = JSON.stringify({
          html: `<div id="app" style="padding: 1rem;">${template}</div>`,
          css: style,
          js: `Vue.use(Eks);${mount(script)}`,
          css_external: 'https://unpkg.com/eks/dist/eks.css',
          css_pre_processor: 'none',
          js_external: 'https://unpkg.com/vue/dist/vue.js;https://unpkg.com/eks/dist/eks.js',
          js_pre_processor: 'babel',
        });
        form.appendChild(input);
        form.appendChild(button);
        body.appendChild(form);
        button.click();
        body.removeChild(form);
      },

      keydown(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          this.full();
        }
      },
    },
  };
</script>

<style>
  @import "../assets/styles/variables.css";

  @block highlight {
    border-radius: .25rem;
    border: 1px solid #eee;
    height: 4rem;
    margin-bottom: 1rem;
    overflow-y: hidden;
    position: relative;
    transition-duration: .3s;

    @modifier expanded {
      height: auto;
    }

    @modifier fulled {
      background-color: #fff;
      border: 0;
      bottom: 0;
      height: 100% !important;
      left: 0;
      overflow: hidden;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 10;

      & > pre {
        height: 100%;

        & > code {
          height: 100%;
          overflow: auto;
        }
      }
    }

    @element actions {
      position: absolute;
      right: 1rem;
      top: 1rem;
      z-index: 1;

      & > .tc-button {
        &:focus {
          box-shadow: none;
        }
      }

      & > .tc-button--link {
        &:hover {
          background-color: #fff;
        }
      }
    }

    & > pre {
      border: 0;
      font-size: .875rem;
      margin-bottom: 0;

      & > code {
        padding: .5rem 1rem;
      }
    }
  }
</style>
