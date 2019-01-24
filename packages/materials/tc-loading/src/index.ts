import TCIcon from '../../tc-icon/src';
import Loading from './loading';
import LoadingDirective from './loading-directive';

export default {
  Loading,
  LoadingDirective,

  install(Vue: any) {
    Vue.use(TCIcon);
    Vue.component(Loading.name, Loading);
    Vue.directive(LoadingDirective.name, LoadingDirective);
  },
};
export {
  Loading,
  LoadingDirective,
};
