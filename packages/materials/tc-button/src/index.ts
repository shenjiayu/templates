import TCIcon from '../../tc-icon/src';
import Button from './button';
import ButtonGroup from './button-group';

export default {
  Button,
  ButtonGroup,

  install(Vue: any) {
    Vue.use(TCIcon);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
  },
};
export {
  Button,
  ButtonGroup,
};
