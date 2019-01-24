import Input from './input.vue';
import InputGroup from './input-group';

export default {
  Input,
  InputGroup,

  install(Vue: any) {
    Vue.component(Input.name, Input);
    Vue.component(InputGroup.name, InputGroup);
  },
};
export {
  Input,
  InputGroup,
};
