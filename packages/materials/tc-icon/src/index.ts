import feather from 'feather-icons';
import Icon from './icon';

export default {
  feather,
  Icon,

  install(Vue: any) {
    Vue.component(Icon.name, Icon);
  },
};
export { feather, Icon };
