import Vue from 'vue';
import TCCard from '../src';

Vue.use(TCCard);

describe('<tc-card>', () => {
  it('bottom-image', () => {
    const vm = new Vue({
      template: '<tc-card bottom-image="https://dummyimage.com/320x180/999/fff">content</tc-card>',
    }).$mount();

    expect(vm.$el.lastElementChild.tagName.toLowerCase()).to.equal('img');
  });

  it('top-image', () => {
    const vm = new Vue({
      template: '<tc-card top-image="https://dummyimage.com/320x180/999/fff">content</tc-card>',
    }).$mount();

    expect(vm.$el.firstElementChild.tagName.toLowerCase()).to.equal('img');
  });

  describe('slots', () => {
    it('header', () => {
      const vm = new Vue({
        template: '<tc-card><div slot="header">header</div></tc-card>',
      }).$mount();

      expect(vm.$el.firstElementChild.classList.contains('tc-card__header')).to.be.true;
    });

    it('footer', () => {
      const vm = new Vue({
        template: '<tc-card><div slot="footer">footer</div></tc-card>',
      }).$mount();

      expect(vm.$el.firstElementChild.classList.contains('tc-card__footer')).to.be.true;
    });
  });
});
