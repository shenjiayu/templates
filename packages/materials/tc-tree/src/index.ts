import TCCheckbox from '../../tc-checkbox/src';
import TCCollapse from '../../tc-collapse/src';
import TCIcon from '../../tc-icon/src';
import Tree from './tree';

export default {
  Tree,

  install(Vue: any) {
    Vue.use(TCCheckbox);
    Vue.use(TCCollapse);
    Vue.use(TCIcon);
    Vue.component(Tree.name, Tree);
  },
};
export { Tree };
