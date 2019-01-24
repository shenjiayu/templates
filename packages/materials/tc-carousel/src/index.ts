import TCIcon from '../../tc-icon/src';
import Carousel from './carousel';

export default {
  Carousel,

  install(Vue: any) {
    Vue.use(TCIcon);
    Vue.component(Carousel.name, Carousel);
  },
};
export {
  Carousel,
};
