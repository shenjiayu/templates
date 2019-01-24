import Vue from 'vue';
import TCCascader from '../src';

Vue.use(TCCascader);

describe('<tc-cascader>', () => {
  describe('props', () => {
    it('change-trigger', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'value',
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-cascader :data="data" expanded></tc-cascader>',
      }).$mount();

      vm.$el.querySelector('.tc-cascader__item').click();

      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.tc-cascader__value').value).to.equal('');
        vm.$el.querySelector('.tc-cascader__list:last-child .tc-cascader__item').click();

        vm.$nextTick(() => {
          expect(vm.$el.querySelector('.tc-cascader__value').value).to.equal('value,value');
          done();
        });
      });
    });

    it('change-trigger: select', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'value',
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-cascader :data="data" change-trigger="select" expanded></tc-cascader>',
      }).$mount();

      vm.$el.querySelector('.tc-cascader__item').click();

      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.tc-cascader__value').value).to.equal('value');
        vm.$el.querySelector('.tc-cascader__list:last-child .tc-cascader__item').click();

        vm.$nextTick(() => {
          expect(vm.$el.querySelector('.tc-cascader__value').value).to.equal('value,value');
          done();
        });
      });
    });

    it('clearable', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
              },
            ],
            value: ['value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value" clearable></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').value).to.equal('value');
      expect(vm.$el.querySelectorAll('.tc-cascader__clear').length).to.equal(1);
      vm.$el.querySelector('.tc-cascader__clear').click();
      setTimeout(() => {
        expect(vm.$el.querySelector('.tc-cascader__input').value).to.equal('');
        done();
      }, 100);
    });

    it('container', () => {
      const vm = new Vue({
        template: '<tc-cascader container="body"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelectorAll('.tc-cascader__menu').length).to.equal(0);
    });

    it('data', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value1',
              },
              {
                value: 'value2',
              },
            ],
          };
        },

        template: '<tc-cascader :data="data"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__item:first-child').textContent).to.equal('value1');
      expect(vm.$el.querySelector('.tc-cascader__item:last-child').textContent).to.equal('value2');
    });

    it('data: not specified', () => {
      const vm = new Vue({
        template: '<tc-cascader></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelectorAll('.tc-cascader__list').length).to.equal(0);
    });

    it('disabled', () => {
      const vm = new Vue({
        template: '<tc-cascader disabled></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').disabled).to.be.true;
    });

    it('expand-trigger', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'value',
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-cascader :data="data" expanded></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelectorAll('.tc-cascader__list').length).to.equal(1);
      vm.$el.querySelector('.tc-cascader__item').click();

      vm.$nextTick(() => {
        expect(vm.$el.querySelectorAll('.tc-cascader__list').length).to.equal(2);
        done();
      });
    });

    it('filterable', () => {
      const vm = new Vue({
        template: '<tc-cascader filterable></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').readOnly).to.be.false;
    });

    it('format', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'value',
                  },
                ],
              },
            ],
            value: ['value', 'value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value" :format="format"></tc-cascader>',

        methods: {
          format(options) {
            return options.map(option => option.value).join('+');
          },
        },
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').value).to.equal('value+value');
    });

    it('inline', () => {
      const vm = new Vue({
        template: '<tc-cascader inline></tc-cascader>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-cascader--inline')).to.be.true;
    });

    it('input-id', () => {
      const vm = new Vue({
        template: '<tc-cascader input-id="input-id"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').id).to.equal('input-id');
    });

    it('name', () => {
      const vm = new Vue({
        template: '<tc-cascader name="name"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__value').name).to.equal('name');
    });

    it('placeholder', () => {
      const vm = new Vue({
        template: '<tc-cascader placeholder="placeholder"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').placeholder).to.equal('placeholder');
    });

    it('readonly', () => {
      const vm = new Vue({
        template: '<tc-cascader readonly></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').readOnly).to.be.true;
    });

    it('size', () => {
      const vm = new Vue({
        template: '<tc-cascader size="small"></tc-cascader>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-cascader--small')).to.be.true;
    });
  });

  describe('events', () => {
    it('select', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value1',
              },
              {
                value: 'value2',
              },
            ],
            value: ['value1'],
          };
        },

        template: '<tc-cascader :data="data" :value="value" @select="select"></tc-cascader>',

        methods: {
          select(newValue, oldValue) {
            expect(newValue.join()).to.equal('value2');
            expect(oldValue.join()).to.equal('value1');
          },
        },
      }).$mount();

      vm.$el.querySelector('.tc-cascader__item:last-child').click();
    });

    it('change', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value1',
              },
              {
                value: 'value2',
              },
            ],
            value: ['value1'],
          };
        },

        template: '<tc-cascader :data="data" :value="value" @change="change"></tc-cascader>',

        methods: {
          change(newValue, oldValue) {
            expect(newValue.join()).to.equal('value2');
            expect(oldValue.join()).to.equal('value1');
          },
        },
      }).$mount();

      vm.$el.querySelector('.tc-cascader__item:last-child').click();
    });
  });

  describe('option', () => {
    it('value', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'value',
                  },
                ],
              },
            ],
            value: ['value', 'value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__value').value).to.equal('value,value');
    });

    it('label', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                label: 'label',
                value: 'value',
                children: [
                  {
                    label: 'label',
                    value: 'value',
                  },
                ],
              },
            ],
            value: ['value', 'value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').value).to.equal('label / label');
    });

    it('label: inherit from value', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'value',
                  },
                ],
              },
            ],
            value: ['value', 'value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__input').value).to.equal('value / value');
    });

    it('content', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                label: 'label',
                value: 'value',
                content: 'content',
              },
            ],
          };
        },

        template: '<tc-cascader :data="data"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__content').textContent).to.equal('content');
    });

    it('content: function', () => {
      const vm = new Vue({
        data() {
          const option = {
            label: 'label',
            value: 'value',
          };
          const option2 = {
            label: 'label',
            value: 'value',
          };
          const option3 = {
            label: 'label',
            value: 'value',
            content(createElement, current, parent, root) {
              expect(current).to.equal(option3);
              expect(parent).to.equal(option2);
              expect(root).to.equal(option);

              return createElement(
                'span',

                ['content'],
              );
            },
          };

          option.children = [option2];
          option2.children = [option3];

          return {
            data: [option],
            value: ['value', 'value', 'value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__list:last-child').textContent).to.equal('content');
    });

    it('content: object', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                content: {
                  template: '<span>content</span>',
                },
              },
            ],
          };
        },

        template: '<tc-cascader :data="data"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__content').textContent).to.equal('content');
    });

    it('content: inherit from label', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                label: 'label',
                value: 'value',
              },
            ],
          };
        },

        template: '<tc-cascader :data="data"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__content').textContent).to.equal('label');
    });

    it('content: inherit from value', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
              },
            ],
          };
        },

        template: '<tc-cascader :data="data"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__content').textContent).to.equal('value');
    });

    it('disabled', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                label: 'label',
                value: 'value',
              },
              {
                label: 'label',
                value: 'value',
                disabled: true,
              },
            ],
          };
        },

        template: '<tc-cascader :data="data"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__item:first-child').classList.contains('tc-cascader__item--disabled')).to.be.false;
      expect(vm.$el.querySelector('.tc-cascader__item:last-child').classList.contains('tc-cascader__item--disabled')).to.be.true;
    });

    it('children', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children: [
                  {
                    value: 'child-value',
                  },
                ],
              },
            ],
            value: ['value', 'child-value'],
          };
        },

        template: '<tc-cascader :data="data" :value="value"></tc-cascader>',
      }).$mount();

      expect(vm.$el.querySelector('.tc-cascader__list:first-child .tc-cascader__item').classList.contains('tc-cascader__item--expandable')).to.be.true;
      expect(vm.$el.querySelector('.tc-cascader__list:last-child .tc-cascader__content').textContent).to.equal('child-value');
    });

    it('children: function', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                value: 'value',
                children(callback) {
                  setTimeout(() => {
                    callback([
                      {
                        value: 'child-value',
                      },
                    ]);
                  }, 50);
                },
              },
            ],
          };
        },

        template: '<tc-cascader :data="data" expanded></tc-cascader>',
      }).$mount();
      const $item = vm.$el.querySelector('.tc-cascader__item');

      expect($item.classList.contains('tc-cascader__item--loadable')).to.be.true;
      $item.click();
      setTimeout(() => {
        expect(vm.$el.querySelector('.tc-cascader__list:last-child .tc-cascader__content').textContent).to.equal('child-value');
        done();
      }, 100);
    });
  });
});
