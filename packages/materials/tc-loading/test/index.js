import Vue from 'vue';
import TCLoading from '../src';

Vue.use(TCLoading);

const createContainer = () => {
  const el = document.createElement('div');

  document.body.appendChild(el);
  return el;
};

describe('<tc-loading>', () => {
  describe('props', () => {
    describe('content', () => {
      it('should be default slot if not specified', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading>Loading...</tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelector('.tc-loading__content').textContent).to.equal('Loading...');
      });

      it('should support html', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading content="&lt;span&gt;Loading...&lt;/span&gt;"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelector('.tc-loading__content').textContent).to.equal('Loading...');
      });

      it('should support vue component', () => {
        const vm = new Vue({
          data() {
            return {
              content: {
                template: '<span>Loading...</span>',
              },
            };
          },

          template: (
            '<div>' +
              '<tc-loading :content="content"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelector('.tc-loading__content').textContent).to.equal('Loading...');
      });

      it('should support render function', () => {
        const vm = new Vue({
          data() {
            return {
              content: createElement => createElement('span', ['Loading...']),
            };
          },

          template: (
            '<div>' +
              '<tc-loading :content="content"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelector('.tc-loading__content').textContent).to.equal('Loading...');
      });
    });

    describe('fullscreen', () => {
      it('false (default)', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading ref="loading"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$refs.loading.$el.classList.contains('tc-loading--fullscreen')).to.be.false;
      });

      it('true', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading ref="loading" fullscreen></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$refs.loading.$el.classList.contains('tc-loading--fullscreen')).to.be.true;
        expect(vm.$el.querySelectorAll('.tc-loading').length).to.equal(0);
      });
    });

    describe('icon', () => {
      it('loader (default)', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelector('.tc-loading__icon').classList.contains('tc-icon--loader')).to.be.true;
      });

      it('false', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading :icon="false"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelectorAll('.tc-loading__icon').length).to.equal(0);
      });

      it('refresh-cw', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading icon="refresh-cw"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.querySelector('.tc-loading__icon').classList.contains('tc-icon--refresh-cw')).to.be.true;
      });
    });

    describe('lock', () => {
      it('false (default)', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading visible></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.classList.contains('tc-loading-lock')).to.be.false;
      });

      it('true', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading visible lock></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$el.classList.contains('tc-loading-lock')).to.be.true;
      });
    });

    describe('target', () => {
      it('should be parent element by default', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading ref="loading"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$refs.loading.currentTarget).to.equal(vm.$el);
      });

      it('should be body if parent element is null', () => {
        const vm = new Vue({
          template: '<tc-loading ref="loading"></tc-loading>',
        }).$mount();

        expect(vm.$refs.loading.currentTarget).to.equal(vm.$el.ownerDocument.body);
      });

      it('should be the given target', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<div ref="target" id="target"></div>' +
              '<tc-loading ref="loading" target="#target"></tc-loading>' +
            '</div>'
          ),
        }).$mount(createContainer());

        expect(vm.$refs.loading.currentTarget).to.equal(vm.$refs.target);
      });
    });

    describe('visible', () => {
      it('should be hidden by default', () => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading ref="loading"></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        expect(vm.$refs.loading.$el.style.display).to.equal('none');
      });

      it('should be visible after mounted', (done) => {
        const vm = new Vue({
          template: (
            '<div>' +
              '<tc-loading ref="loading" visible></tc-loading>' +
            '</div>'
          ),
        }).$mount();

        setTimeout(() => {
          expect(vm.$refs.loading.$el.style.display).not.to.equal('none');
          done();
        }, 200);
      });
    });
  });

  describe('methods', () => {
    it('show', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading"></tc-loading>' +
          '</div>'
        ),
      }).$mount();
      const { loading } = vm.$refs;

      loading.show();
      expect(loading.isVisible).to.be.true;
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading" visible></tc-loading>' +
          '</div>'
        ),
      }).$mount();
      const { loading } = vm.$refs;

      setTimeout(() => {
        loading.hide();
        expect(loading.isVisible).to.be.false;
        done();
      }, 200);
    });

    it('toggle', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading"></tc-loading>' +
          '</div>'
        ),
      }).$mount();
      const { loading } = vm.$refs;

      loading.toggle();
      expect(loading.isVisible).to.be.true;
      setTimeout(() => {
        loading.toggle();
        expect(loading.isVisible).to.be.false;
        done();
      }, 200);
    });
  });

  describe('events', () => {
    it('show', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading" @show="show"></tc-loading>' +
          '</div>'
        ),

        methods: {
          show() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      vm.$refs.loading.show();
    });

    it('shown', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading" @shown="shown"></tc-loading>' +
          '</div>'
        ),

        methods: {
          shown() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      vm.$refs.loading.show();
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading" @hide="hide" visible></tc-loading>' +
          '</div>'
        ),

        methods: {
          hide() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      setTimeout(() => {
        vm.$refs.loading.hide();
      }, 200);
    });

    it('hidden', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<tc-loading ref="loading" @hidden="hidden" visible></tc-loading>' +
          '</div>'
        ),

        methods: {
          hidden() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      setTimeout(() => {
        vm.$refs.loading.hide();
      }, 200);
    });
  });

  describe('directives', () => {
    describe('v-tc-loading', () => {
      it('default', (done) => {
        const vm = new Vue({
          template: '<div v-tc-loading="true"></div>',
        }).$mount();

        expect(vm.$el.firstElementChild.classList.contains('tc-loading')).to.be.true;

        setTimeout(() => {
          expect(vm.$el.firstElementChild.style.display).not.to.equal('none');
          done();
        }, 200);
      });

      it('fullscreen', () => {
        const vm = new Vue({
          template: '<div v-tc-loading.fullscreen="true"></div>',
        }).$mount();

        expect(vm.$el.childElementCount).to.equal(0);
      });

      it('lock', () => {
        const vm = new Vue({
          template: '<div v-tc-loading.lock="true"></div>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-loading-lock')).to.be.true;
      });
    });
  });
});
