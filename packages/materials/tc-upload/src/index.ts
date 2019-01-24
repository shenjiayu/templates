import TCIcon from '../../tc-icon/src';
import TCTooltip from '../../tc-tooltip/src';
import TCProgress from '../../tc-progress/src';
import Upload from './upload';

export default {
  Upload,

  install(Vue: any) {
    Vue.use(TCIcon);
    Vue.use(TCTooltip);
    Vue.use(TCProgress);
    Vue.component(Upload.name, Upload);
  },
};
export {
  Upload,
};
