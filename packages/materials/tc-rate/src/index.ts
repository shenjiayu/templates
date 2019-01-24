import TCIcon from '../../tc-icon/src';
import TCTooltip from '../../tc-tooltip/src';
import Rate from './rate';

export default {
  Rate,

  install(Vue: any) {
    Vue.use(TCIcon);
    Vue.use(TCTooltip);
    Vue.component(Rate.name, Rate);
  },
};
export {
  Rate,
};
