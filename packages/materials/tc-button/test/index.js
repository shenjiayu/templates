import Vue from 'vue';
import TCButton from '../src';

Vue.use(TCButton);

describe('<tc-button>', () => {
  it('name', () => {
    const vm = new Vue({
      template: '<tc-button name="button"></tc-button>',
    }).$mount();

    expect(vm.$el.name).to.equal('button');
  });

  it('value', () => {
    const vm = new Vue({
      template: '<tc-button value="button"></tc-button>',
    }).$mount();

    expect(vm.$el.value).to.equal('button');
  });

  it('type#native', () => {
    const vm = new Vue({
      template: '<tc-button type="reset"></tc-button>',
    }).$mount();

    expect(vm.$el.type).to.equal('reset');
  });

  it('type#custom', () => {
    const vm = new Vue({
      template: '<tc-button type="primary"></tc-button>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-button--primary')).to.be.true;
  });

  it('type#multiple', () => {
    const vm = new Vue({
      template: '<tc-button type="submit primary"></tc-button>',
    }).$mount();

    expect(vm.$el.type).to.equal('submit');
    expect(vm.$el.classList.contains('tc-button--primary')).to.be.true;
  });

  it('size', () => {
    const vm = new Vue({
      template: '<tc-button size="small"></tc-button>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-button--small')).to.be.true;
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-button tag="a"></tc-button>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('a');
  });

  it('block', () => {
    const vm = new Vue({
      template: '<tc-button block></tc-button>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-button--block')).to.be.true;
  });

  it('outline', () => {
    const vm = new Vue({
      template: '<tc-button outline></tc-button>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-button--outline')).to.be.true;
  });

  it('disabled', () => {
    const vm = new Vue({
      template: '<tc-button disabled></tc-button>',
    }).$mount();

    expect(vm.$el.disabled).to.be.true;
  });
});

describe('<tc-button-group>', () => {
  describe('props', () => {
    describe('size', () => {
      it('should match the given size', () => {
        const vm = new Vue({
          template: (
            '<tc-button-group size="small">' +
              '<tc-button type="primary">Button</tc-button>' +
            '</tc-button-group>'
          ),
        }).$mount();

        expect(vm.$el.classList.contains('tc-button-group--small')).to.be.true;
      });

      it('should pass size to children', () => {
        const vm = new Vue({
          template: (
            '<tc-button-group size="large">' +
              '<tc-button type="primary">Button</tc-button>' +
            '</tc-button-group>'
          ),
        }).$mount();

        expect(vm.$el.firstElementChild.classList.contains('tc-button--large')).to.be.true;
      });
    });

    describe('tag', () => {
      it('should be div by default', () => {
        const vm = new Vue({
          template: (
            '<tc-button-group>' +
              '<tc-button type="primary">Button</tc-button>' +
            '</tc-button-group>'
          ),
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('div');
      });

      it('should match the given tag', () => {
        const vm = new Vue({
          template: (
            '<tc-button-group tag="form">' +
              '<tc-button type="primary">Button</tc-button>' +
            '</tc-button-group>'
          ),
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('form');
      });
    });

    describe('vertical', () => {
      it('should be vertical', () => {
        const vm = new Vue({
          template: (
            '<tc-button-group vertical>' +
              '<tc-button type="primary">Button</tc-button>' +
            '</tc-button-group>'
          ),
        }).$mount();

        expect(vm.$el.classList.contains('tc-button-group--vertical')).to.be.true;
      });
    });
  });
});
