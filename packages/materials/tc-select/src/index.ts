import Select from './select.vue';

export default {
  Select,

  install(Vue: any) {
    Vue.component(Select.name, Select);
  },
};
export { Select };
