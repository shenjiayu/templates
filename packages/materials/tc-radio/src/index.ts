import Radio from './radio.vue';

export default {
  Radio,

  install(Vue: any) {
    Vue.component(Radio.name, Radio);
  },
};
export { Radio };
