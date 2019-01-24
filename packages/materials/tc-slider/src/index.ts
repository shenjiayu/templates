import Slider from './slider';

export default {
  Slider,

  install(Vue: any) {
    Vue.component(Slider.name, Slider);
  },
};
export { Slider };
