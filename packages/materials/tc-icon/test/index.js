import Vue from 'vue';
import { icons } from 'feather-icons';
import TCIcon from '../src';

Vue.use(TCIcon);

describe('<tc-icon>', () => {
  describe('props', () => {
    describe('animation', () => {
      it('default', () => {
        const vm = new Vue({
          template: '<tc-icon type="feather"></tc-icon>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-icon--rotation')).to.be.false;
      });

      it('rotation', () => {
        const vm = new Vue({
          template: '<tc-icon type="feather" animation="rotation"></tc-icon>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-icon--rotation')).to.be.true;
      });
    });

    describe('type', () => {
      it('feather', () => {
        const vm = new Vue({
          template: '<tc-icon type="feather"></tc-icon>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-icon--feather')).to.be.true;
        expect(vm.$el.querySelector('svg').innerHTML).to.equal(icons.feather.contents);
      });
    });

    it('size', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" size="2rem"></tc-icon>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('width')).to.equal('2rem');
      expect(vm.$el.querySelector('svg').getAttribute('height')).to.equal('2rem');
    });

    it('fill', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" fill="red"></tc-icon>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('fill')).to.equal('red');
    });

    it('stroke', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" stroke="red"></tc-icon>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke')).to.equal('red');
    });

    it('stroke-width', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" stroke-width="3"></tc-icon>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke-width')).to.equal('3');
    });

    it('stroke-linecap', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" stroke-linecap="butt"></tc-icon>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke-linecap')).to.equal('butt');
    });

    it('stroke-linejoin', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" stroke-linejoin="miter"></tc-icon>',
      }).$mount();

      expect(vm.$el.querySelector('svg').getAttribute('stroke-linejoin')).to.equal('miter');
    });

    it('tag', () => {
      const vm = new Vue({
        template: '<tc-icon type="feather" tag="span"></tc-icon>',
      }).$mount();

      expect(vm.$el.tagName.toLowerCase()).to.equal('span');
    });
  });
});
