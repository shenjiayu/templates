import { CreateElement, VNode } from 'vue';
import * as utils from '../../tc-utils/src';
import * as Carousel from './carousel.d';

enum Direction {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down',
}
enum Trigger {
  Click = 'click',
  Hover = 'hover',
}
enum IndicatorType {
  Line = 'line',
  Disc = 'disc',
}

export default {
  name: 'tc-carousel',

  data() {
    return {
      endX: 0,
      endY: 0,
      index: 0,
      list: [],
      playing: false,
      sliding: false,
      startX: 0,
      startY: 0,
      timeout: 0,
    };
  },

  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },

    controls: {
      type: [Boolean, String],
      default: Trigger.Hover,
    },

    data: Array,

    direction: {
      type: String,
      default: Direction.Left,
    },

    indicators: {
      type: [Boolean, String],
      default: true,
    },

    indicatorTrigger: {
      type: String,
      default: Trigger.Click,
    },

    indicatorType: {
      type: String,
      default: IndicatorType.Line,
    },

    interval: {
      type: Number,
      default: 5000,
    },

    tag: {
      type: String,
      default: 'div',
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,

      {
        class: {
          'tc-carousel': true,
          [`tc-carousel--${this.direction}`]: this.direction,
          'tc-carousel--controls': this.controls === Trigger.Hover,
          'tc-carousel--indicators': this.indicators === Trigger.Hover,
        },

        on: utils.assign({}, this.$listeners, utils.Window.PointerEvent ? {
          pointerenter: this.pause,
          pointerleave: this.cycle,
          pointerdown: this.slideStart,
          pointermove: this.slideMove,
          pointerup: this.slideEnd,
        } : {
          mouseenter: this.pause,
          mouseleave: this.cycle,
          touchstart: this.slideStart,
          touchmove: this.slideMove,
          touchend: this.slideEnd,
          mousedown: this.slideStart,
          mousemove: this.slideMove,
          mouseup: this.slideEnd,
        }),
      },

      utils.isEmptyArray(this.list) ? [] : [
        createElement(
          'ul',

          {
            class: 'tc-carousel__list',
          },

          this.list.map((item: Carousel.Item, index: number) => createElement(
            'li',

            {
              attrs: {
                'data-index': index,
              },

              class: {
                'tc-carousel__item': true,
                'tc-carousel__item--active': item.active,
                'tc-carousel__item--top': item.top,
                'tc-carousel__item--right': item.right,
                'tc-carousel__item--bottom': item.bottom,
                'tc-carousel__item--left': item.left,
                'tc-carousel__item--to-top': item.toTop,
                'tc-carousel__item--to-right': item.toRight,
                'tc-carousel__item--to-bottom': item.toBottom,
                'tc-carousel__item--to-left': item.toLeft,
              },
            },

            [
              createElement(utils.createComponent(item.content, {
                data: [item.raw, this],
              })),
            ],
          )),
        ),

        this.indicators ? createElement(
          'ol',

          {
            class: {
              'tc-carousel__indicators': true,
              [`tc-carousel__indicators--${this.indicatorType}`]: this.indicatorType,
            },
          },

          this.list.map((item: Carousel.Item, index: number) => createElement(
            'li',

            {
              attrs: {
                'data-slide-to': index,
              },

              class: {
                'tc-carousel__indicator': true,
                'tc-carousel__indicator--active': item.sliding,
              },

              on: ((listeners: any = {}) => {
                const slide = () => {
                  this.slideTo(index);
                };

                if (this.indicatorTrigger === Trigger.Hover) {
                  listeners.touchstart = slide;
                  listeners[
                    utils.Window.PointerEvent ? 'pointerenter' : 'mouseenter'
                  ] = slide;
                } else {
                  listeners.click = slide;
                }

                return listeners;
              })(),
            },
          )),
        ) : '',

        this.controls ? createElement(
          'button',

          {
            attrs: {
              'data-slide': 'prev',
            },

            class: 'tc-carousel__control tc-carousel__control--prev',

            on: {
              click: () => {
                if (utils.includes(this.direction, ['right', 'down'])) {
                  this.next();
                } else {
                  this.prev();
                }
              },
            },
          },

          [
            createElement(
              'tc-icon',

              {
                props: {
                  size: 16,
                  type: 'chevron-left',
                },
              },
            ),
          ],
        ) : '',

        this.controls ? createElement(
          'button',

          {
            attrs: {
              'data-slide': 'next',
            },

            class: 'tc-carousel__control tc-carousel__control--next',

            on: {
              click: () => {
                if (utils.includes(this.direction, ['right', 'down'])) {
                  this.prev();
                } else {
                  this.next();
                }
              },
            },
          },

          [
            createElement(
              'tc-icon',

              {
                props: {
                  size: 16,
                  type: 'chevron-right',
                },
              },
            ),
          ],
        ) : '',
      ],
    );
  },

  methods: {
    init() {
      const { data } = this;
      const list: Carousel.List = [];

      if (!utils.isEmptyArray(data)) {
        data.forEach((rawItem: Carousel.RawItem, index: number) => {
          const active = index === this.index;
          const item = Object.assign(
            {},

            utils.isPlainObject(rawItem) && !utils.isUndefined(rawItem.content) ? rawItem : {
              content: rawItem,
            },

            {
              active,
              bottom: false,
              left: false,
              raw: rawItem,
              right: false,
              sliding: active,
              toBottom: false,
              toLeft: false,
              toRight: false,
              toTop: false,
              top: false,
            },
          );

          list.push(item);
        });
      }

      this.list = list;
    },

    play() {
      if (!this.playing) {
        this.playing = true;
        this.cycle();
      }
    },

    cycle() {
      this.pause();
      this.timeout = setTimeout(() => {
        this.next(() => {
          this.cycle();
        });
      }, this.interval);
    },

    pause() {
      clearTimeout(this.timeout);
      this.timeout = 0;
    },

    stop() {
      if (this.playing) {
        this.pause();
        this.playing = false;
      }
    },

    prev(done: Function = () => {}) {
      this.slide(this.index - 1, true, done);
    },

    next(done: Function = () => {}) {
      this.slide(this.index + 1, false, done);
    },

    slide(index: number, reverse: boolean = false, done: Function = () => {}) {
      if (document.hidden || this.sliding) {
        done();
        return;
      }

      this.sliding = true;

      const { list } = this;
      const minIndex = 0;
      const maxIndex = list.length - 1;

      if (index > maxIndex) {
        index = minIndex;
      } else if (index < minIndex) {
        index = maxIndex;
      }

      if (index === this.index) {
        done();
        return;
      }

      const active = list[this.index];
      const next = list[index];

      switch (this.direction) {
        case Direction.Up:
          next.bottom = !reverse;
          next.top = reverse;
          break;

        case Direction.Right:
          next.left = !reverse;
          next.right = reverse;
          break;

        case Direction.Down:
          next.top = !reverse;
          next.bottom = reverse;
          break;

        // case Direction.Left:
        default:
          next.right = !reverse;
          next.left = reverse;
      }

      // Waiting for the class change applied
      this.$nextTick(() => {
        // Force reflow to enable CSS3 transition
        // eslint-disable-next-line
        this.$el.offsetWidth;

        switch (this.direction) {
          case Direction.Up:
            active.toTop = !reverse;
            active.toBottom = reverse;
            next.toTop = !reverse;
            next.toBottom = reverse;
            break;

          case Direction.Right:
            active.toRight = !reverse;
            active.toLeft = reverse;
            next.toRight = !reverse;
            next.toLeft = reverse;
            break;

          case Direction.Down:
            active.toBottom = !reverse;
            active.toTop = reverse;
            next.toBottom = !reverse;
            next.toTop = reverse;
            break;

          // case Direction.Left:
          default:
            active.toLeft = !reverse;
            active.toRight = reverse;
            next.toLeft = !reverse;
            next.toRight = reverse;
        }

        active.sliding = false;
        next.sliding = true;

        setTimeout(() => {
          active.active = false;
          active.top = false;
          active.right = false;
          active.bottom = false;
          active.left = false;
          active.toTop = false;
          active.toRight = false;
          active.toBottom = false;
          active.toLeft = false;

          next.active = true;
          next.top = false;
          next.right = false;
          next.bottom = false;
          next.left = false;
          next.toTop = false;
          next.toRight = false;
          next.toBottom = false;
          next.toLeft = false;

          this.index = index;
          this.sliding = false;
          done();
        }, 600);
      });
    },

    slideTo(index: number) {
      if (index === this.index) {
        return;
      }

      const { direction } = this;
      let reverse = index < this.index;

      if (direction === Direction.Right || direction === Direction.Down) {
        reverse = !reverse;
      }

      this.slide(index, reverse);
    },

    slideStart(event: any) {
      const touch = event.touches ? event.touches[0] : null;

      if (event.touches) {
        this.stop();
      }

      this.startX = touch ? touch.pageX : event.pageX;
      this.startY = touch ? touch.pageY : event.pageY;
    },

    slideMove(event: any) {
      const touch = event.touches ? event.touches[0] : null;

      event.preventDefault();

      this.endX = touch ? touch.pageX : event.pageX;
      this.endY = touch ? touch.pageY : event.pageY;
    },

    slideEnd(event: any) {
      const moveX = this.endX - this.startX;
      const moveY = this.endY - this.startY;
      const thresholdX = this.$el.offsetWidth / 5;
      const thresholdY = this.$el.offsetHeight / 5;
      const top = moveY < -thresholdY;
      const right = moveX > thresholdX;
      const bottom = moveY > thresholdY;
      const left = moveX < -thresholdX;
      const done = () => {
        if (event.touches) {
          this.start();
        }
      };
      let prev = false;
      let next = false;

      switch (this.direction) {
        case Direction.Up:
          prev = bottom;
          next = top;
          break;

        case Direction.Right:
          prev = left;
          next = right;
          break;

        case Direction.Down:
          prev = top;
          next = bottom;
          break;

        // case Direction.Left:
        default:
          prev = right;
          next = left;
      }

      if (prev) {
        this.prev(done);
      } else if (next) {
        this.next(done);
      } else {
        done();
      }

      this.endX = this.startX;
      this.endY = this.startY;
    },
  },

  watch: {
    data() {
      this.init();
    },
  },

  created() {
    this.init();
  },

  mounted() {
    utils.addEventListener(document, 'visibilitychange', this.onVisibilityChange = () => {
      if (this.playing) {
        if (document.visibilityState === 'visible') {
          this.cycle();
        } else {
          this.pause();
        }
      }
    });

    if (this.autoplay) {
      this.play();
    }
  },

  beforeDestroy() {
    utils.removeEventListener(document, 'visibilitychange', this.onVisibilityChange);
  },
};
