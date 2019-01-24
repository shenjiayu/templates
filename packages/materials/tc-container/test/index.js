import Vue from 'vue';
import TCContainer from '../src';

Vue.use(TCContainer);

describe('<tc-container>', () => {
  describe('fluid', () => {
    it('should not be fluid by default', () => {
      const vm = new Vue({
        template: '<tc-container></tc-container>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-container--fluid')).to.be.false;
    });

    it('should be fluid', () => {
      const vm = new Vue({
        template: '<tc-container fluid></tc-container>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-container--fluid')).to.be.true;
    });
  });

  describe('tag', () => {
    it('should be "div" by default', () => {
      const vm = new Vue({
        template: '<tc-container></tc-container>',
      }).$mount();

      expect(vm.$el.tagName.toLowerCase()).to.equal('div');
    });

    it('should be "section"', () => {
      const vm = new Vue({
        template: '<tc-container tag="section"></tc-container>',
      }).$mount();

      expect(vm.$el.tagName.toLowerCase()).to.equal('section');
    });
  });
});
