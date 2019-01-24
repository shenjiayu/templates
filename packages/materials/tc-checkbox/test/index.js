import Vue from 'vue';
import TCCheckbox from '../src';

Vue.use(TCCheckbox);

describe('<tc-checkbox>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-checkbox name="checkbox"></tc-checkbox>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('checkbox');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-checkbox value="checkbox"></tc-checkbox>',
    }).$mount();

    expect(vm.$el.querySelector('input').value).to.equal('checkbox');
  });

  it('value#default', () => {
    const vm = new Vue({
      template: '<tc-checkbox></tc-checkbox>',
    }).$mount();

    expect(vm.$el.querySelector('input').value).to.equal('on');
  });

  it('indeterminate', () => {
    const vm = new Vue({
      template: '<tc-checkbox indeterminate></tc-checkbox>',
    }).$mount();

    expect(vm.$el.querySelector('input').indeterminate).to.be.true;
  });

  it('checked', () => {
    const vm = new Vue({
      template: '<tc-checkbox checked></tc-checkbox>',
    }).$mount();

    expect(vm.$el.querySelector('input').checked).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-checkbox disabled></tc-checkbox>',
    }).$mount();

    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });
});
