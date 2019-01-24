import Vue from 'vue';
import TCPopover from '../src';

Vue.use(TCPopover);

describe('<tc-popover>', () => {
  describe('props', () => {
    it('container', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover target="#target" container="body" content="A simple popover" visible></tc-popover>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.tc-popover').length).to.equal(0);
        done();
      }, 200);
    });

    it('content', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover target="#target" content="A simple popover"></tc-popover>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-popover__body').textContent).to.equal('A simple popover');
    });

    it('content#default', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover target="#target">A simple popover</tc-popover>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-popover__body').textContent).to.equal('A simple popover');
    });

    it('title', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover target="#target" title="A simple popover">A simple popover</tc-popover>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('.tc-popover__header').textContent).to.equal('A simple popover');
        done();
      }, 200);
    });

    it('visible', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover target="#target" visible>A simple popover</tc-popover>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('.tc-popover').style.display).not.to.equal('none');
        done();
      }, 200);
    });
  });

  describe('methods', () => {
    it('show', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover"></tc-popover>' +
          '</div>'
        ),
      }).$mount();

      vm.$refs.popover.show();
      expect(vm.$refs.popover.isVisible).to.be.true;
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover" visible></tc-popover>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        vm.$refs.popover.hide();
        expect(vm.$refs.popover.isVisible).to.be.false;
        done();
      }, 200);
    });

    it('toggle', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover"></tc-popover>' +
          '</div>'
        ),
      }).$mount();

      vm.$refs.popover.toggle();
      expect(vm.$refs.popover.isVisible).to.be.true;
      setTimeout(() => {
        vm.$refs.popover.toggle();
        expect(vm.$refs.popover.isVisible).to.be.false;
        done();
      }, 200);
    });
  });

  describe('events', () => {
    it('show', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover" @show="show"></tc-popover>' +
          '</div>'
        ),

        methods: {
          show() {
            expect(true).to.be.true;
            setTimeout(done, 200);
          },
        },
      }).$mount();

      vm.$refs.popover.show();
    });

    it('shown', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover" @shown="shown"></tc-popover>' +
          '</div>'
        ),

        methods: {
          shown() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      vm.$refs.popover.show();
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover" @hide="hide" visible></tc-popover>' +
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
        vm.$refs.popover.hide();
      }, 200);
    });

    it('hidden', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle popover</button>' +
            '<tc-popover ref="popover" target="#target" content="A simple popover" @hidden="hidden" visible></tc-popover>' +
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
        vm.$refs.popover.hide();
      }, 200);
    });
  });
});
