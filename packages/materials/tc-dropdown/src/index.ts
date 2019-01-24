import Popper from 'popper.js';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';

export default {
  Dropdown,
  DropdownItem,
  Popper,

  install(Vue: any) {
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(DropdownItem.name, DropdownItem);
  },
};
export {
  Dropdown,
  DropdownItem,
  Popper,
};
