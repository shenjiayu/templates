import Row from './row';

export default {
  Row,

  install(Vue: any) {
    Vue.component(Row.name, Row);
  },
};
export { Row };
