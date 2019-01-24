import Vue from 'vue';
import TCNumberInput from '../src';

Vue.use(TCNumberInput);

describe('<tc-number-input>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-number-input name="digit"></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('digit');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-number-input :value="10"></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(10);
  });

  it('min', () => {
    const vm = new Vue({
      template: '<tc-number-input :value="-1" :min="0"></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(0);
  });

  it('max', () => {
    const vm = new Vue({
      template: '<tc-number-input :value="100" :max="10"></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('input').valueAsNumber).to.equal(10);
  });

  it('step', (done) => {
    const vm = new Vue({
      template: '<tc-number-input :step="2" controls></tc-number-input>',

      mounted() {

      },
    }).$mount();

    vm.$el.querySelector('button:last-child').click();
    setTimeout(() => {
      expect(vm.$el.querySelector('input').valueAsNumber).to.equal(2);
      done();
    }, 100);
  });

  it('size', () => {
    const vm = new Vue({
      template: '<tc-number-input size="small"></tc-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-number-input--small')).to.be.true;
  });

  it('inline', () => {
    const vm = new Vue({
      template: '<tc-number-input inline></tc-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-number-input--inline')).to.be.true;
  });

  it('center', () => {
    const vm = new Vue({
      template: '<tc-number-input center></tc-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-number-input--center')).to.be.true;
  });

  it('controls', () => {
    const vm = new Vue({
      template: '<tc-number-input controls></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelectorAll('button').length).to.equal(2);
  });

  it('readonly', () => {
    const vm = new Vue({
      template: '<tc-number-input controls readonly></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('button').disabled).to.be.true;
    expect(vm.$el.querySelector('input').readOnly).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-number-input controls disabled></tc-number-input>',
    }).$mount();

    expect(vm.$el.querySelector('button').disabled).to.be.true;
    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });
});
