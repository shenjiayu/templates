import Switch from './switch.vue';

export default {
  Switch,

  install(Vue: any) {
    Vue.component(Switch.name, Switch);
  },
};
export { Switch };
