import Vue from 'vue';
import TCProgress from '../src';

Vue.use(TCProgress);

describe('<tc-progress>', () => {
  it('max', () => {
    const vm = new Vue({
      template: '<tc-progress :value="50" :max="100"></tc-progress>',
    }).$mount();

    expect(vm.$el.firstElementChild.style.width).to.equal('50%');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-progress :value=".5"></tc-progress>',
    }).$mount();

    expect(vm.$el.firstElementChild.style.width).to.equal('50%');
  });

  it('percentage', () => {
    const vm = new Vue({
      template: '<tc-progress percentage></tc-progress>',
    }).$mount();

    expect(vm.$el.firstElementChild.textContent).to.equal('0%');
  });

  it('type', () => {
    const vm = new Vue({
      template: '<tc-progress type="success"></tc-progress>',
    }).$mount();

    expect(vm.$el.firstElementChild.classList.contains('tc-progress__bar--success')).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-progress tag="span"></tc-progress>',
    }).$mount();

    expect(vm.$el.tagName.toLocaleLowerCase()).to.equal('span');
  });
});
