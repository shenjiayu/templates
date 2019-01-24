import Popper from 'popper.js';
import Popover from './popover';
import PopoverDirective from './popover-directive';

export default {
  Popover,
  PopoverDirective,
  Popper,

  install(Vue: any) {
    Vue.component(Popover.name, Popover);
    Vue.directive(PopoverDirective.name, PopoverDirective);
  },
};
export {
  Popover,
  PopoverDirective,
  Popper,
};
