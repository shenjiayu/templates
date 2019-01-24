import Vue from 'vue';
import TCCollapse from '../src';

Vue.use(TCCollapse);

describe('<tc-collapse>', () => {
  it('expanded', (done) => {
    const vm = new Vue({
      template: '<tc-collapse expanded>content</tc-collapse>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.style.display).to.equal('');
      done();
    }, 100);
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-collapse tag="p">content</tc-collapse>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('p');
  });

  it('toggle', (done) => {
    const vm = new Vue({
      template: '<div><tc-collapse ref="collapse" @shown="shown" @hidden="hidden">content</tc-collapse></div>',
      methods: {
        shown() {
          expect(true).to.be.true;
          vm.$refs.collapse.toggle();
        },
        hidden() {
          expect(true).to.be.true;
          done();
        },
      },
    }).$mount();

    vm.$refs.collapse.toggle();
  });

  it('show', (done) => {
    const vm = new Vue({
      template: '<div><tc-collapse ref="collapse" @show="show" expanded>content</tc-collapse></div>',
      methods: {
        show() {
          expect(true).to.be.true;
          done();
        },
      },
    }).$mount();

    vm.$refs.collapse.show();
  });

  it('shown', (done) => {
    const vm = new Vue({
      template: '<div><tc-collapse ref="collapse" @shown="shown">content</tc-collapse></div>',
      methods: {
        shown() {
          expect(true).to.be.true;
          done();
        },
      },
    }).$mount();

    vm.$refs.collapse.show();
  });

  it('hide', (done) => {
    const vm = new Vue({
      template: '<div><tc-collapse ref="collapse" @hide="hide" expanded>content</tc-collapse></div>',
      methods: {
        hide() {
          expect(true).to.be.true;
          done();
        },
      },
    }).$mount();

    setTimeout(() => {
      vm.$refs.collapse.hide();
    }, 500);
  });

  it('hidden', (done) => {
    const vm = new Vue({
      template: '<div><tc-collapse ref="collapse" @hidden="hidden" expanded>content</tc-collapse></div>',
      methods: {
        hidden() {
          expect(true).to.be.true;
          done();
        },
      },
    }).$mount();

    setTimeout(() => {
      vm.$refs.collapse.hide();
    }, 500);
  });
});
