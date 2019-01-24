import Vue from 'vue';
import TCTooltip from '../src';

Vue.use(TCTooltip);

describe('<tc-tooltip>', () => {
  describe('props', () => {
    it('container', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip target="#target" container="body" content="A simple tooltip" visible></tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.tc-tooltip').length).to.equal(0);
        done();
      }, 200);
    });

    it('content', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip target="#target" content="A simple tooltip"></tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-tooltip__inner').textContent).to.equal('A simple tooltip');
    });

    it('content#default', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip target="#target">A simple tooltip</tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-tooltip__inner').textContent).to.equal('A simple tooltip');
    });

    it('visible', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip target="#target" visible>A simple tooltip</tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('.tc-tooltip').style.display).not.to.equal('none');
        done();
      }, 200);
    });
  });

  describe('methods', () => {
    it('show', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip"></tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      vm.$refs.tooltip.show();
      expect(vm.$refs.tooltip.isVisible).to.be.true;
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip" visible></tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        vm.$refs.tooltip.hide();
        expect(vm.$refs.tooltip.isVisible).to.be.false;
        done();
      }, 200);
    });

    it('toggle', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip"></tc-tooltip>' +
          '</div>'
        ),
      }).$mount();

      vm.$refs.tooltip.toggle();
      expect(vm.$refs.tooltip.isVisible).to.be.true;
      setTimeout(() => {
        vm.$refs.tooltip.toggle();
        expect(vm.$refs.tooltip.isVisible).to.be.false;
        done();
      }, 200);
    });
  });

  describe('events', () => {
    it('show', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip" @show="show"></tc-tooltip>' +
          '</div>'
        ),

        methods: {
          show() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      vm.$refs.tooltip.show();
    });

    it('shown', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip" @shown="shown"></tc-tooltip>' +
          '</div>'
        ),

        methods: {
          shown() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      vm.$refs.tooltip.show();
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip" @hide="hide" visible></tc-tooltip>' +
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
        vm.$refs.tooltip.hide();
      }, 200);
    });

    it('hidden', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle tooltip</button>' +
            '<tc-tooltip ref="tooltip" target="#target" content="A simple tooltip" @hidden="hidden" visible></tc-tooltip>' +
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
        vm.$refs.tooltip.hide();
      }, 200);
    });
  });
});
