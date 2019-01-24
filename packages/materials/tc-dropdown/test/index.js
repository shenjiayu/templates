import Vue from 'vue';
import TCDropdown from '../src';

Vue.use(TCDropdown);

describe('<tc-dropdown>', () => {
  describe('props', () => {
    it('container', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target" container="body">' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelectorAll('.tc-dropdown').length).to.equal(0);
    });

    it('tag', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target" tag="nav">' +
              '<tc-dropdown-item tag="a">Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-dropdown').tagName.toLowerCase()).to.equal('nav');
    });

    it('visible', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target" visible>' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('.tc-dropdown').style.display).not.to.equal('none');
        done();
      }, 200);
    });
  });

  describe('methods', () => {
    it('show', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target">' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      vm.$refs.dropdown.show();
      expect(vm.$refs.dropdown.isVisible).to.be.true;
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target" visible>' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        vm.$refs.dropdown.hide();
        expect(vm.$refs.dropdown.isVisible).to.be.false;
        done();
      }, 200);
    });

    it('toggle', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target">' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      vm.$refs.dropdown.toggle();
      expect(vm.$refs.dropdown.isVisible).to.be.true;
      setTimeout(() => {
        vm.$refs.dropdown.toggle();
        expect(vm.$refs.dropdown.isVisible).to.be.false;
        done();
      }, 200);
    });
  });

  describe('events', () => {
    it('show', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target" @show="show">' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),

        methods: {
          show() {
            expect(true).to.be.true;
            setTimeout(done, 200);
          },
        },
      }).$mount();

      vm.$refs.dropdown.show();
    });

    it('shown', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target" @shown="shown">' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),

        methods: {
          shown() {
            expect(true).to.be.true;
            done();
          },
        },
      }).$mount();

      vm.$refs.dropdown.show();
    });

    it('hide', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target" @hide="hide" visible>' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
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
        vm.$refs.dropdown.hide();
      }, 200);
    });

    it('hidden', (done) => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown ref="dropdown" target="#target" @hidden="hidden" visible>' +
              '<tc-dropdown-item>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
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
        vm.$refs.dropdown.hide();
      }, 200);
    });
  });
});

describe('<tc-dropdown-item>', () => {
  describe('props', () => {
    it('disabled', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target">' +
              '<tc-dropdown-item disabled>Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-dropdown__item').classList.contains('tc-dropdown__item--disabled')).to.be.true;
    });

    it('divider', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target">' +
              '<tc-dropdown-item divider></tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-dropdown__item').classList.contains('tc-dropdown__item--divider')).to.be.true;
    });

    it('header', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target">' +
              '<tc-dropdown-item header>Header</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-dropdown__item').classList.contains('tc-dropdown__item--header')).to.be.true;
    });

    it('tag', () => {
      const vm = new Vue({
        template: (
          '<div>' +
            '<button id="target">Toggle dropdown</button>' +
            '<tc-dropdown target="#target" tag="nav">' +
              '<tc-dropdown-item tag="a">Action</tc-dropdown-item>' +
            '</tc-dropdown>' +
          '</div>'
        ),
      }).$mount();

      expect(vm.$el.querySelector('.tc-dropdown__item').tagName.toLowerCase()).to.equal('a');
    });
  });
});
