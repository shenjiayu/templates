import Vue from 'vue';
import TCBreadcrumb from '../src';

Vue.use(TCBreadcrumb);

describe('<tc-breadcrumb>', () => {
  it('separator', () => {
    const vm = new Vue({
      template: (
        '<tc-breadcrumb separator=">">' +
          '<tc-breadcrumb-item></tc-breadcrumb-item>' +
        '</tc-breadcrumb>'
      ),
    }).$mount();

    expect(vm.$el.firstElementChild.dataset.separator).to.equal('>');
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-breadcrumb tag="nav"></tc-breadcrumb>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('nav');
  });
});

describe('<tc-breadcrumb-item>', () => {
  it('active', () => {
    const vm = new Vue({
      template: '<tc-breadcrumb-item active></tc-breadcrumb-item>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-breadcrumb__item--active')).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-breadcrumb-item tag="a"></tc-breadcrumb-item>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('a');
  });
});
