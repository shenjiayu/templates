import Vue from 'vue';
import TCTextarea from '../src';

Vue.use(TCTextarea);

describe('<tc-textarea>', () => {
  it('value', () => {
    const vm = new Vue({
      template: '<tc-textarea value="textarea"></tc-textarea>',
    }).$mount();

    expect(vm.$el.value).to.equal('textarea');
  });

  it('rows#number', () => {
    const vm = new Vue({
      template: '<tc-textarea :rows="5"></tc-textarea>',
    }).$mount();

    expect(vm.$el.rows).to.equal(5);
  });

  it('rows#array', () => {
    const vm = new Vue({
      template: '<tc-textarea :rows="[3,8]"></tc-textarea>',
    }).$mount();

    expect(vm.$el.rows).to.equal(3);
  });

  it('readonly', () => {
    const vm = new Vue({
      template: '<tc-textarea readonly></tc-textarea>',
    }).$mount();

    expect(vm.$el.readOnly).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-textarea disabled></tc-textarea>',
    }).$mount();

    expect(vm.$el.disabled).to.be.true;
  });
});
