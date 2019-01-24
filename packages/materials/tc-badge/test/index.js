import Vue from 'vue';
import TCBadge from '../src';

Vue.use(TCBadge);

describe('<tc-badge>', () => {
  it('rounded', () => {
    const vm = new Vue({
      template: '<tc-badge rounded></tc-badge>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-badge--rounded')).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-badge tag="a"></tc-badge>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('a');
  });

  it('type', () => {
    const vm = new Vue({
      template: '<tc-badge type="primary"></tc-badge>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-badge--primary')).to.be.true;
  });
});
