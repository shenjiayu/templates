import Vue from 'vue';
import TCCarousel from '../src';

Vue.use(TCCarousel);

describe('<tc-carousel>', () => {
  describe('props', () => {
    describe('autoplay', () => {
      it('should play automatically by default', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        expect(vm.$refs.carousel.playing).to.be.true;
      });

      it('should not play automatically', () => {
        const vm = new Vue({
          template: '<tc-carousel :autoplay="false" :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        expect(vm.$refs.carousel.playing).to.be.false;
      });
    });

    describe('controls', () => {
      it('should show controls', () => {
        const vm = new Vue({
          template: '<tc-carousel :controls="true" :data="[1, 2, 3]"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelectorAll('.tc-carousel__control').length).to.equal(2);
      });

      it('should hide controls', () => {
        const vm = new Vue({
          template: '<tc-carousel :controls="false" :data="[1, 2, 3]"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelectorAll('.tc-carousel__control').length).to.equal(0);
      });
    });

    describe('data', () => {
      it('should support text as content', () => {
        const vm = new Vue({
          data() {
            return {
              data: [
                'content',
              ],
            };
          },

          template: '<tc-carousel :data="data"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__item').textContent).to.equal('content');
      });

      it('should support html as content', () => {
        const vm = new Vue({
          data() {
            return {
              data: [
                '<div>content</div>',
              ],
            };
          },

          template: '<tc-carousel :data="data"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__item').textContent).to.equal('content');
      });

      it('should support vue component as content', () => {
        const vm = new Vue({
          data() {
            return {
              data: [
                {
                  template: '<div>content</div>',
                },
              ],
            };
          },

          template: '<tc-carousel :data="data"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__item').textContent).to.equal('content');
      });

      it('should support render function as content', () => {
        const vm = new Vue({
          data() {
            return {
              data: [
                createElement => createElement('div', ['content']),
              ],
            };
          },

          template: '<tc-carousel :data="data"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__item').textContent).to.equal('content');
      });

      it('should support plain object as content', () => {
        const vm = new Vue({
          data() {
            return {
              data: [
                {
                  content: 'content',
                },
              ],
            };
          },

          template: '<tc-carousel :data="data"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__item').textContent).to.equal('content');
      });
    });

    describe('indicators', () => {
      it('should show indicators be default', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__indicators')).to.not.be.null;
      });

      it('should hide indicators', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" :indicators="false"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__indicators')).to.be.null;
      });
    });

    describe('indicator-trigger', () => {
      it('should switch the last slide on click the last indicator by default', (done) => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        vm.$el.querySelector('.tc-carousel__indicator:last-child').click();

        setTimeout(() => {
          expect(vm.$refs.carousel.index).to.equal(2);
          done();
        }, 1000);
      });
    });

    describe('indicator-type', () => {
      it('should be "line" be default', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__indicators--line')).to.not.be.null;
      });

      it('should be "disc"', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" indicator-type="disc"></tc-carousel>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-carousel__indicators--disc')).to.not.be.null;
      });
    });

    describe('interval', () => {
      it('should switch to next slide after the given interval time', (done) => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" :interval="500" ref="carousel"></tc-carousel>',
        }).$mount();

        setTimeout(() => {
          expect(vm.$refs.carousel.index).to.equal(1);
          done();
        }, 1200);
      });
    });

    describe('tag', () => {
      it('should be "div" be default', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]"></tc-carousel>',
        }).$mount();

        expect(vm.$el.tagName).to.match(/div/i);
      });

      it('should match the given tag', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" tag="span"></tc-carousel>',
        }).$mount();

        expect(vm.$el.tagName).to.match(/span/i);
      });
    });
  });

  describe('methods', () => {
    describe('play', () => {
      it('should play when execute the method', () => {
        const vm = new Vue({
          template: '<tc-carousel :autoplay="false" :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        vm.$refs.carousel.play();
        expect(vm.$refs.carousel.playing).to.be.true;
      });
    });

    describe('stop', () => {
      it('should stop when execute the method', () => {
        const vm = new Vue({
          template: '<tc-carousel :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        vm.$refs.carousel.stop();
        expect(vm.$refs.carousel.playing).to.be.false;
      });
    });

    describe('prev', () => {
      it('should switch to previous slide when execute the method', (done) => {
        const vm = new Vue({
          template: '<tc-carousel :autoplay="false" :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        vm.$refs.carousel.prev();

        setTimeout(() => {
          expect(vm.$refs.carousel.index).to.equal(2);
          done();
        }, 1000);
      });
    });

    describe('next', () => {
      it('should switch to next slide when execute the method', (done) => {
        const vm = new Vue({
          template: '<tc-carousel :autoplay="false" :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        vm.$refs.carousel.next();

        setTimeout(() => {
          expect(vm.$refs.carousel.index).to.equal(1);
          done();
        }, 1000);
      });
    });

    describe('slideTo', () => {
      it('should switch to last slide', (done) => {
        const vm = new Vue({
          template: '<tc-carousel :autoplay="false" :data="[1, 2, 3]" ref="carousel"></tc-carousel>',
        }).$mount();

        vm.$refs.carousel.slideTo(2);

        setTimeout(() => {
          expect(vm.$refs.carousel.index).to.equal(2);
          done();
        }, 1000);
      });
    });
  });
});
