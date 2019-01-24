import Vue from 'vue';
import TCRate from '../src';

Vue.use(TCRate);

describe('<tc-rate>', () => {
  describe('props', () => {
    describe('block', () => {
      it('should not include `tc-rate--block` class by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-rate--block')).to.be.false;
      });

      it('should include `tc-rate--block` class', () => {
        const vm = new Vue({
          template: '<tc-rate block></tc-rate>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-rate--block')).to.be.true;
      });
    });

    describe('color', () => {
      it('should be empty by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.style.color).to.be.empty;
      });

      it('should match the given color', () => {
        const vm = new Vue({
          template: '<tc-rate color="red"></tc-rate>',
        }).$mount();

        expect(vm.$el.style.color).to.equal('red');
      });

      it('should support function', () => {
        const vm = new Vue({
          template: '<tc-rate :value="3" :color="color"></tc-rate>',

          methods: {
            color() {
              return 'red';
            },
          },
        }).$mount();

        expect(vm.$el.style.color).to.equal('red');
      });
    });

    describe('disabled', () => {
      it('should not be disabled by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').disabled).to.be.false;
        expect(vm.$el.classList.contains('tc-rate--disabled')).to.be.false;
      });

      it('should be disabled', () => {
        const vm = new Vue({
          template: '<tc-rate disabled></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').disabled).to.be.true;
        expect(vm.$el.classList.contains('tc-rate--disabled')).to.be.true;
      });
    });

    describe('icon', () => {
      it('should match the default icon', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__icon').classList.contains('tc-icon--star')).to.be.true;
      });

      it('should match the given icon', () => {
        const vm = new Vue({
          template: '<tc-rate icon="heart"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__icon').classList.contains('tc-icon--heart')).to.be.true;
      });

      it('should support function', (done) => {
        const vm = new Vue({
          template: '<tc-rate :value="3" :icon="icon"></tc-rate>',

          methods: {
            icon(value, itemValue = 0) {
              return itemValue <= value && value > 2 ? 'heart' : 'star';
            },
          },
        }).$mount();

        setTimeout(() => {
          const icons = vm.$el.querySelectorAll('.tc-rate__icon');

          expect(icons.item(0).classList.contains('tc-icon--heart')).to.be.true;
          expect(icons.item(4).classList.contains('tc-icon--star')).to.be.true;
          done();
        }, 50);
      });
    });

    describe('max', () => {
      it('should be 5 be default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').max).to.equal('5');
      });

      it('should match the given number', () => {
        const vm = new Vue({
          template: '<tc-rate :max="10"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').max).to.equal('10');
      });
    });

    describe('min', () => {
      it('should be 0 be default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').min).to.equal('0');
      });

      it('should match the given number', () => {
        const vm = new Vue({
          template: '<tc-rate :min="1"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').min).to.equal('1');
      });
    });

    describe('name', () => {
      it('should be empty be default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').name).to.equal('');
      });

      it('should match the given name', () => {
        const vm = new Vue({
          template: '<tc-rate name="rate"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').name).to.equal('rate');
      });
    });

    describe('readonly', () => {
      it('should not be readonly by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').readOnly).to.be.false;
        expect(vm.$el.classList.contains('tc-rate--readonly')).to.be.false;
      });

      it('should be readonly', () => {
        const vm = new Vue({
          template: '<tc-rate readonly></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').readOnly).to.be.true;
        expect(vm.$el.classList.contains('tc-rate--readonly')).to.be.true;
      });
    });

    describe('size', () => {
      it('should be 24 by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__icon > svg').getAttribute('width')).to.equal('24');
      });

      it('should be 16', () => {
        const vm = new Vue({
          template: '<tc-rate :size="16"></tc-rate>',
        }).$mount();

        expect(vm.$el.style.fontSize).to.equal('16px');
        expect(vm.$el.querySelector('.tc-rate__icon > svg').getAttribute('width')).to.equal('16');
      });

      it('should be 2rem', () => {
        const vm = new Vue({
          template: '<tc-rate size="2rem"></tc-rate>',
        }).$mount();

        expect(vm.$el.style.fontSize).to.equal('2rem');
        expect(vm.$el.querySelector('.tc-rate__icon > svg').getAttribute('width')).to.equal('2rem');
      });
    });

    describe('step', () => {
      it('should be 1 by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').step).to.equal('1');
      });

      it('should match the given number', () => {
        const vm = new Vue({
          template: '<tc-rate :step="2"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').step).to.equal('2');
      });
    });

    describe('tag', () => {
      it('should be div by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('div');
      });

      it('should match the given tag', () => {
        const vm = new Vue({
          template: '<tc-rate tag="span"></tc-rate>',
        }).$mount();

        expect(vm.$el.tagName.toLowerCase()).to.equal('span');
      });
    });

    describe('tooltip', () => {
      it('should be disabled by default', () => {
        const vm = new Vue({
          template: '<tc-rate ref="rate"></tc-rate>',
        }).$mount();

        expect(vm.$refs.rate.tooltip).to.be.false;
      });

      it('should be enabled', () => {
        const vm = new Vue({
          template: '<tc-rate ref="rate" tooltip></tc-rate>',
        }).$mount();

        expect(vm.$refs.rate.tooltip).to.be.true;
      });


      it('should support function', (done) => {
        const vm = new Vue({
          template: '<tc-rate :tooltip="tooltip"></tc-rate>',

          methods: {
            tooltip(value, itemValue) {
              return `${(itemValue / 5) * 100}%`;
            },
          },
        }).$mount();

        setTimeout(() => {
          expect(vm.$el.querySelector('.tc-rate__item').dataset.label).to.equal('20%');
          done();
        }, 50);
      });
    });

    describe('value', () => {
      it('should be 0 by default', () => {
        const vm = new Vue({
          template: '<tc-rate></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').valueAsNumber).to.equal(0);
      });

      it('should match the given value', () => {
        const vm = new Vue({
          template: '<tc-rate :value="3"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').valueAsNumber).to.equal(3);
      });

      it('should support v-model', (done) => {
        const vm = new Vue({
          data() {
            return {
              value: 3,
            };
          },

          template: '<tc-rate v-model="value"></tc-rate>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-rate__input').valueAsNumber).to.equal(3);
        vm.$el.querySelector('.tc-rate__item').click();
        setTimeout(() => {
          expect(vm.$el.querySelector('.tc-rate__input').valueAsNumber).to.equal(1);
          done();
        }, 50);
      });

      it('should support decimal', (done) => {
        const vm = new Vue({
          template: '<tc-rate :value=".75"></tc-rate>',
        }).$mount();

        setTimeout(() => {
          const wraps = vm.$el.querySelectorAll('.tc-rate__wrap');

          expect(wraps).to.have.lengthOf(1);
          expect(wraps[0].style.width).to.equal('75%');
          done();
        }, 50);
      });
    });
  });

  describe('events', () => {
    describe('input', () => {
      it('should trigger input event when mouse enter', () => {
        const vm = new Vue({
          template: '<tc-rate :value="3" @input="input"></tc-rate>',

          methods: {
            input(newValue, oldValue) {
              expect(newValue).to.equal(1);
              expect(oldValue).to.equal(3);
            },
          },
        }).$mount();

        vm.$el.querySelector('.tc-rate__item').dispatchEvent(new Event('mouseenter', {
          bubbles: true,
          cancelable: true,
        }));
      });

      it('should trigger input event when mouse leave', () => {
        const vm = new Vue({
          template: '<tc-rate :value="3" @input="input"></tc-rate>',

          methods: {
            input(newValue, oldValue) {
              expect(newValue).to.equal(3);
              expect(oldValue).to.equal(3);
            },
          },
        }).$mount();

        vm.$el.querySelector('.tc-rate__item').dispatchEvent(new Event('mouseleave', {
          bubbles: true,
          cancelable: true,
        }));
      });
    });

    describe('change', () => {
      it('should trigger change event', () => {
        const vm = new Vue({
          template: '<tc-rate :value="3" @change="change"></tc-rate>',

          methods: {
            change(newValue, oldValue) {
              expect(newValue).to.equal(1);
              expect(oldValue).to.equal(3);
            },
          },
        }).$mount();

        vm.$el.querySelector('.tc-rate__item').click();
      });

      it('should change the binding value', () => {
        const vm = new Vue({
          data() {
            return {
              value: 3,
            };
          },

          template: '<tc-rate v-model="value" @change="change"></tc-rate>',

          methods: {
            change() {
              expect(this.value).to.equal(1);
            },
          },
        }).$mount();

        vm.$el.querySelector('.tc-rate__item').click();
      });
    });
  });
});
