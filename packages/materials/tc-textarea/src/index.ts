import Textarea from './textarea.vue';

export default {
  Textarea,

  install(Vue: any) {
    Vue.component(Textarea.name, Textarea);
  },
};
export { Textarea };
