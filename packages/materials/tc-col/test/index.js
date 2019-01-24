import Vue from 'vue';
import TCCol from '../src';

Vue.use(TCCol);

describe('<tc-col>', () => {
  describe('alignSelf', () => {
    it('should be undefined by default', () => {
      const vm = new Vue({
        template: '<tc-col></tc-col>',
      }).$mount();

      expect(vm.$el.className).to.not.include('tc-col--align-self');
    });

    it('should be center', () => {
      const vm = new Vue({
        template: '<tc-col align-self="center"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--align-self-center')).to.be.true;
    });
  });

  describe('span', () => {
    it('should support number', () => {
      const vm = new Vue({
        template: '<tc-col :span="6"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--span-6')).to.be.true;
    });

    it('should support string', () => {
      const vm = new Vue({
        template: '<tc-col span="sm md-8 lg-10 xl-auto"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--span-sm')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--span-md-8')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--span-lg-10')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--span-xl-auto')).to.be.true;
    });
  });

  describe('order', () => {
    it('should support number', () => {
      const vm = new Vue({
        template: '<tc-col :order="6"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--order-6')).to.be.true;
    });

    it('should support string', () => {
      const vm = new Vue({
        template: '<tc-col order="sm-1 md-2 lg-3 xl-auto"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--order-sm-1')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--order-md-2')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--order-lg-3')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--order-xl-auto')).to.be.true;
    });
  });

  describe('offset', () => {
    it('should support number', () => {
      const vm = new Vue({
        template: '<tc-col :offset="6"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--offset-6')).to.be.true;
    });

    it('should support string', () => {
      const vm = new Vue({
        template: '<tc-col offset="sm-1 md-2 lg-3 xl-auto"></tc-col>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-col--offset-sm-1')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--offset-md-2')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--offset-lg-3')).to.be.true;
      expect(vm.$el.classList.contains('tc-col--offset-xl-auto')).to.be.true;
    });
  });

  describe('tag', () => {
    it('should be "div" by default', () => {
      const vm = new Vue({
        template: '<tc-col tag="dd"></tc-col>',
      }).$mount();

      expect(vm.$el.tagName.toLowerCase()).to.equal('dd');
    });

    it('should be "dd"', () => {
      const vm = new Vue({
        template: '<tc-col tag="dd"></tc-col>',
      }).$mount();

      expect(vm.$el.tagName.toLowerCase()).to.equal('dd');
    });
  });
});
