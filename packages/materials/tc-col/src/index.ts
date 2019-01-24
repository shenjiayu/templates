import Col from './col';

export default {
  Col,

  install(Vue: any) {
    Vue.component(Col.name, Col);
  },
};
export { Col };
