import Vue from 'vue';
import TCStep from '../src';

Vue.use(TCStep);

describe('<tc-step>', () => {
  it('currentStep', (done) => {
    const vm = new Vue({
      template: (
        '<tc-step :current-step="2">' +
          '<tc-step-item></tc-step-item>' +
          '<tc-step-item ref="item"></tc-step-item>' +
        '</tc-step>'
      ),
    }).$mount();

    setTimeout(() => {
      expect(vm.$refs.item.$el.classList.contains('tc-step__item--active')).to.be.true;
      done();
    }, 100);
  });

  it('currentStatus', (done) => {
    const vm = new Vue({
      template: (
        '<tc-step current-status="error">' +
          '<tc-step-item ref="item"></tc-step-item>' +
        '</tc-step>'
      ),
    }).$mount();

    setTimeout(() => {
      expect(vm.$refs.item.$el.classList.contains('tc-step__item--error')).to.be.true;
      done();
    }, 100);
  });

  it('finishedStatus', (done) => {
    const vm = new Vue({
      template: (
        '<tc-step :current-step="2" finished-status="success">' +
          '<tc-step-item ref="item"></tc-step-item>' +
          '<tc-step-item></tc-step-item>' +
        '</tc-step>'
      ),
    }).$mount();

    setTimeout(() => {
      expect(vm.$refs.item.$el.classList.contains('tc-step__item--success')).to.be.true;
      done();
    }, 100);
  });

  it('pendingStatus', (done) => {
    const vm = new Vue({
      template: (
        '<tc-step pending-status="process">' +
          '<tc-step-item></tc-step-item>' +
          '<tc-step-item ref="item"></tc-step-item>' +
        '</tc-step>'
      ),
    }).$mount();

    setTimeout(() => {
      expect(vm.$refs.item.$el.classList.contains('tc-step__item--process')).to.be.true;
      done();
    }, 100);
  });

  it('vertical', () => {
    const vm = new Vue({
      template: '<tc-step vertical></tc-step>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-step--vertical')).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-step tag="nav"></tc-step>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('nav');
  });
});

describe('<tc-step-item>', () => {
  it('icon', () => {
    const vm = new Vue({
      template: '<tc-step-item icon="clock"></tc-step-item>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-icon--clock')).to.not.be.null;
  });

  it('sign', () => {
    const vm = new Vue({
      template: '<tc-step-item sign="A"></tc-step-item>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-step__sign').textContent).to.equal('A');
  });

  it('text', () => {
    const vm = new Vue({
      template: '<tc-step-item text="Title"></tc-step-item>',
    }).$mount();

    expect(vm.$el.querySelector('.tc-step__text').textContent).to.equal('Title');
  });

  it('status', () => {
    const vm = new Vue({
      template: '<tc-step-item status="error"></tc-step-item>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-step__item--error')).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-step-item tag="a"></tc-step-item>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('a');
  });
});
