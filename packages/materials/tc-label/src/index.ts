import Label from './label.vue';

export default {
    Label,
  
    install(Vue: any) {
      Vue.component(Label.name, Label);
    },
  };
  export { Label };