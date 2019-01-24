import Nav from './nav.vue';

export default {
  Nav,

  install(Vue: any) {
    Vue.component(Nav.name, Nav);
  },
};
export { Nav };
