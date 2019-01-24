import Vue from 'vue';
// import Eks from '../src';
import ThemeTest from '../dist/theme_test.common';
import router from './router';
import App from './views/app.vue';
import '../src/index.css';
import './assets/styles/index.css';
import './components';

Vue.use(ThemeTest);

export default new Vue({
  router,
  el: '#app',
  render: createElement => createElement(App),
});
