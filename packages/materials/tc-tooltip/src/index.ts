import Popper from 'popper.js';
import Tooltip from './tooltip';
import TooltipDirective from './tooltip-directive';

export default {
  Popper,
  Tooltip,
  TooltipDirective,

  install(Vue: any) {
    Vue.component(Tooltip.name, Tooltip);
    Vue.directive(TooltipDirective.name, TooltipDirective);
  },
};
export {
  Popper,
  Tooltip,
  TooltipDirective,
};
