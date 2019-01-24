import Vue from 'vue';
import Tooltip from './tooltip';

export default {
  name: 'tc-tooltip',

  bind(el: any, { value }: any) {
    const VueTooltip: any = Vue.extend(Tooltip);

    el.$eksTooltip = new VueTooltip({
      propsData: {
        container: 'body',
        content: value,
        target: el,
        trigger: 'hover',
      },
    });
  },

  inserted(el: any) {
    el.$eksTooltip.$mount();
  },

  update(el: any) {
    el.$eksTooltip.update();
  },

  unbind(el: any) {
    el.$eksTooltip.$destroy();
  },
};
