import Vue from 'vue';
import * as utils from '../../tc-utils/src';
import Loading from './loading';

export default {
  name: 'tc-loading',

  bind(el: any, { value, modifiers } : any) {
    const VueLoading: any = Vue.extend(Loading);

    el.$eksLoading = new VueLoading({
      propsData: utils.assign({}, modifiers, {
        target: el,
        visible: value,
      }),
    });
  },

  inserted(el: any) {
    el.$eksLoading.$mount();
  },

  update(el: any, { value }: any) {
    el.$eksLoading.visible = value;
  },

  unbind(el: any) {
    el.$eksLoading.$destroy();
  },
};
