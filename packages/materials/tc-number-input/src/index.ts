import TCInput from '../../tc-input/src';
import NumberInput from './number-input.vue';

export default {
  NumberInput,

  install(Vue: any) {
    Vue.use(TCInput);
    Vue.component(NumberInput.name, NumberInput);
  },
};
export { NumberInput };
