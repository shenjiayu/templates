import Checkbox from './checkbox.vue';

export default {
  Checkbox,

  install(Vue: any) {
    Vue.component(Checkbox.name, Checkbox);
  },
};
export { Checkbox };
