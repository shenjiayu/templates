import Vue from 'vue';
import TCSlider from '../src';

Vue.use(TCSlider);

describe('<tc-slider>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-slider name="slider"></tc-slider>',
    }).$mount();

    expect(vm.$el.querySelector('input').name).to.equal('slider');
  });

  it('value', (done) => {
    const vm = new Vue({
      template: '<tc-slider :value="1"></tc-slider>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelector('input').value).to.equal('1');
      done();
    }, 100);
  });

  it('value: [25, 75]', (done) => {
    const vm = new Vue({
      template: '<tc-slider :value="[25, 75]"></tc-slider>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelector('.tc-slider__bar').style.left).to.equal('25%');
      expect(vm.$el.querySelector('.tc-slider__bar').style.width).to.equal('50%');
      expect(vm.$el.querySelector('input').value).to.equal('75');
      done();
    }, 100);
  });

  it('max', (done) => {
    const vm = new Vue({
      template: '<tc-slider :max="99" :value="100"></tc-slider>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelector('input').value).to.equal('99');
      done();
    }, 100);
  });

  it('min', (done) => {
    const vm = new Vue({
      template: '<tc-slider :min="1" :value="0"></tc-slider>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelector('input').value).to.equal('1');
      done();
    }, 100);
  });

  it('step', (done) => {
    const vm = new Vue({
      template: '<tc-slider ref="slider" :step="10"></tc-slider>',
    }).$mount();

    vm.$refs.slider.slideTo(14);
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value).to.equal('10');
      vm.$refs.slider.slideTo(16);
      setTimeout(() => {
        expect(vm.$el.querySelector('input').value).to.equal('20');
        done();
      }, 100);
    }, 100);
  });

  it('readonly', () => {
    const vm = new Vue({
      template: '<tc-slider readonly></tc-slider>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-slider--readonly')).to.be.true;
    expect(vm.$el.querySelector('input').readOnly).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-slider disabled></tc-slider>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-slider--disabled')).to.be.true;
    expect(vm.$el.querySelector('input').disabled).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-slider tag="label"></tc-slider>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('label');
  });
});
