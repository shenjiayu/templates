import Alert from './alert';

export default {
  Alert,

  install(Vue: any) {
    Vue.component(Alert.name, Alert);
  },
};
export { Alert };
