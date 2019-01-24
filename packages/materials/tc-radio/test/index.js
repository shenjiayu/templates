import Vue from 'vue';
import TCRadio from '../src';

Vue.use(TCRadio);

describe('<tc-radio>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-radio name="radio"></tc-radio>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('radio');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-radio value="radio"></tc-radio>',
    }).$mount();

    expect(vm.$el.querySelector('input').value).to.equal('radio');
  });

  it('value#default', () => {
    const vm = new Vue({
      template: '<tc-radio></tc-radio>',
    }).$mount();

    expect(vm.$el.querySelector('input').value).to.equal('on');
  });

  it('checked', () => {
    const vm = new Vue({
      template: '<tc-radio checked></tc-radio>',
    }).$mount();

    expect(vm.$el.querySelector('input').checked).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-radio disabled></tc-radio>',
    }).$mount();

    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });
});
