import Vue from 'vue';
import TCTag from '../src';

Vue.use(TCTag);

describe('<tc-tag>', () => {
  it('closable', () => {
    const vm = new Vue({
      template: '<tc-tag closable></tc-tag>'
    }).$mount();

    expect(vm.$el.querySelectorAll('.tc-tag__close').length).to.equal(1);
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-tag tag="p"></tc-tag>'
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('p');
  });

  it('type', () => {
    const vm = new Vue({
      template: '<tc-tag type="primary"></tc-tag>'
    }).$mount();

    expect(vm.$el.classList.contains('tc-tag--primary')).to.be.true;
  });

  it('visible', () => {
    const vm = new Vue({
      template: '<div><tc-tag :visible="false"></tc-tag></div>'
    }).$mount();

    expect(vm.$el.querySelectorAll('.tc-tag').length).to.equal(0);
  });

  it('close', done => {
    const vm = new Vue({
      template: '<div><tc-tag ref="alert" @close="close" closable></tc-tag></div>',
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
      data() {
        return {
          visible: true
        };
      },
      template: '<div><tc-tag @closed="closed" :visible="visible"></tc-tag></div>',
      methods: {
        closed() {
          expect(true).to.be.true;
          done();
        }
      }
    }).$mount();

    vm.visible = false;
  });
});
