import Container from './container';

export default {
  Container,

  install(Vue: any) {
    Vue.component(Container.name, Container);
  },
};
export { Container };
