import Vue from 'vue';
import TCAlert from '../src';

Vue.use(TCAlert);

describe('<tc-alert>', () => {
  it('closable', () => {
    const vm = new Vue({
      template: '<tc-alert closable></tc-alert>'
    }).$mount();

    expect(vm.$el.querySelectorAll('.tc-alert__close').length).to.equal(1);
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-alert tag="p"></tc-alert>'
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('p');
  });

  it('type', () => {
    const vm = new Vue({
      template: '<tc-alert type="primary"></tc-alert>'
    }).$mount();

    expect(vm.$el.classList.contains('tc-alert--primary')).to.be.true;
  });

  it('close', done => {
    const vm = new Vue({
      template: '<div><tc-alert ref="alert" @close="close" closable></tc-alert></div>',
      methods: {
        close() {
          expect(true).to.be.true;
          done();
        }
      }
    }).$mount();

    vm.$refs.alert.close();
  });

  it('closed', done => {
    const vm = new Vue({
      template: '<div><tc-alert ref="alert" @closed="closed" closable></tc-alert></div>',
      methods: {
        closed() {
          expect(true).to.be.true;
          done();
        }
      }
    }).$mount();

    vm.$refs.alert.close();
  });
});
