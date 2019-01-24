import TCDropdown from '../../tc-dropdown/src';
import TCIcon from '../../tc-icon/src';
import TCInput from '../../tc-input/src';
import Cascader from './cascader';

export default {
  Cascader,

  install(Vue: any) {
    Vue.use(TCDropdown);
    Vue.use(TCIcon);
    Vue.use(TCInput);
    Vue.component(Cascader.name, Cascader);
  },
};
export { Cascader };
