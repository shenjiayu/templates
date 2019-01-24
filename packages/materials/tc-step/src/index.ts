import TCIcon from '../../tc-icon/src';
import Step from './step';
import StepItem from './step-item';

export default {
  Step,
  StepItem,

  install(Vue: any) {
    Vue.use(TCIcon);
    Vue.component(Step.name, Step);
    Vue.component(StepItem.name, StepItem);
  },
};
export {
  Step,
  StepItem,
};
