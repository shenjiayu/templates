import Vue from 'vue';
import TCInput from '../src';

Vue.use(TCInput);

describe('<tc-input>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-input name="input"></tc-input>',
    }).$mount();

    expect(vm.$el.name).to.equal('input');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-input value="input"></tc-input>',
    }).$mount();

    expect(vm.$el.value).to.equal('input');
  });

  it('size#custom', () => {
    const vm = new Vue({
      template: '<tc-input size="small"></tc-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-input--small')).to.be.true;
  });

  it('size#native', () => {
    const vm = new Vue({
      template: '<tc-input size="40"></tc-input>',
    }).$mount();

    expect(vm.$el.size).to.equal(40);
  });

  it('inline', () => {
    const vm = new Vue({
      template: '<tc-input inline></tc-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-input--inline')).to.be.true;
  });

  it('readonly', () => {
    const vm = new Vue({
      template: '<tc-input readonly></tc-input>',
    }).$mount();

    expect(vm.$el.readOnly).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-input disabled></tc-input>',
    }).$mount();

    expect(vm.$el.disabled).to.be.true;
  });
});

describe('<tc-input-group>', () => {
  describe('props', () => {
    describe('size', () => {
      it('should match the given size', () => {
        const vm = new Vue({
          template: (
            '<tc-input-group size="small">' +
              '<tc-input></tc-input>' +
            '</tc-input-group>'
          ),
        }).$mount();

        expect(vm.$el.classList.contains('tc-input-group--small')).to.be.true;
      });

      it('should pass size to component children', () => {
        const vm = new Vue({
          template: (
            '<tc-input-group size="large">' +
              '<tc-input></tc-input>' +
            '</tc-input-group>'
          ),
        }).$mount();

        expect(vm.$el.firstElementChild.classList.contains('tc-input--large')).to.be.true;
      });
    });

    describe('tag', () => {
      it('should be div by default', () => {
        const vm = new Vue({
          template: (
            '<tc-input-group>' +
              '<tc-input></tc-input>' +
            '</tc-input-group>'
          ),
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('div');
      });

      it('should match the given tag', () => {
        const vm = new Vue({
          template: (
            '<tc-input-group tag="form">' +
              '<tc-input></tc-input>' +
            '</tc-input-group>'
          ),
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('form');
      });
    });
  });

  describe('misc', () => {
    it('should add class to non-component children', () => {
      const vm = new Vue({
        template: (
          '<tc-input-group>' +
            '<span>$</span>' +
            '<tc-input type="number"></tc-input>' +
            '<span>.00</span>' +
          '</tc-input-group>'
        ),
      }).$mount();

      expect(vm.$el.firstElementChild.classList.contains('tc-input-group__addon')).to.be.true;
      expect(vm.$el.lastElementChild.classList.contains('tc-input-group__addon')).to.be.true;
    });
  });
});
