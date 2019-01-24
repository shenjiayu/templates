import Vue from 'vue';
import TCSwitch from '../src';

Vue.use(TCSwitch);

describe('<tc-switch>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-switch name="switch"></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('switch');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-switch value="switch"></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('input').value).to.equal('switch');
  });

  it('value#default', () => {
    const vm = new Vue({
      template: '<tc-switch></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('input').value).to.equal('on');
  });

  it('checked', () => {
    const vm = new Vue({
      template: '<tc-switch checked></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('input').checked).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-switch disabled></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });

  it('color', () => {
    const vm = new Vue({
      template: '<tc-switch color="red"></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-switch__indicator').style.backgroundColor).to.equal('red');
  });

  it('checkedColor', () => {
    const vm = new Vue({
      template: '<tc-switch checked-color="green" checked></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-switch__indicator').style.backgroundColor).to.equal('green');
  });

  it('label', () => {
    const vm = new Vue({
      template: '<tc-switch label="label"></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-switch__label--left').textContent).to.equal('label');
  });

  it('checkedLabel', () => {
    const vm = new Vue({
      template: '<tc-switch checked-label="label"></tc-switch>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-switch__label--right').textContent).to.equal('label');
  });
});
