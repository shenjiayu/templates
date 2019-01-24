import Progress from './progress';

export default {
  Progress,

  install(Vue: any) {
    Vue.component(Progress.name, Progress);
  },
};
export { Progress };
