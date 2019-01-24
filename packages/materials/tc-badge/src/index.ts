import Badge from './badge';

export default {
  Badge,

  install(Vue: any) {
    Vue.component(Badge.name, Badge);
  },
};
export { Badge };
