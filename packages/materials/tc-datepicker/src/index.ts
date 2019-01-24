import DatePicker from './DatePicker.vue';

export default {
  DatePicker,

  install(Vue: any) {
    Vue.component(DatePicker.name, DatePicker);
  },
};
export { DatePicker };
