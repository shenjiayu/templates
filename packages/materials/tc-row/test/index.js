import Vue from 'vue';
import TCRow from '../src';

Vue.use(TCRow);

describe('<tc-row>', () => {
  describe('alignItems', () => {
    it('should be undefined by default', () => {
      const vm = new Vue({
        template: '<tc-row></tc-row>',
      }).$mount();

      expect(vm.$el.className).to.not.include('tc-row--align-items');
    });

    it('should be center', () => {
      const vm = new Vue({
        template: '<tc-row align-items="center"></tc-row>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-row--align-items-center')).to.be.true;
    });
  });

  describe('gutters', () => {
    it('should have gutters by default', () => {
      const vm = new Vue({
        template: '<tc-row></tc-row>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-row--gutters')).to.be.true;
    });

    it('should not have gutters', () => {
      const vm = new Vue({
        template: '<tc-row :gutters="false"></tc-row>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-row--gutters')).to.be.false;
    });
  });

  describe('justifyContent', () => {
    it('should be undefined by default', () => {
      const vm = new Vue({
        template: '<tc-row></tc-row>',
      }).$mount();

      expect(vm.$el.className).to.not.include('tc-row--justify-content');
    });

    it('should be center', () => {
      const vm = new Vue({
        template: '<tc-row justify-content="center"></tc-row>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-row--justify-content-center')).to.be.true;
    });
  });

  describe('tag', () => {
    it('should be "div" by default', () => {
      const vm = new Vue({
        template: '<tc-row></tc-row>',
      }).$mount();

      expect(vm.$el.tagName.toLocaleLowerCase()).to.equal('div');
    });

    it('should be "dl"', () => {
      const vm = new Vue({
        template: '<tc-row tag="dl"></tc-row>',
      }).$mount();

      expect(vm.$el.tagName.toLocaleLowerCase()).to.equal('dl');
    });
  });
});
