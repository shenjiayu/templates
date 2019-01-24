import Vue from 'vue';
import Popover from './popover';

export default {
  name: 'tc-popover',

  bind(el: any, { value }: any) {
    const VuePopover: any = Vue.extend(Popover);
    const title = el.getAttribute('title');

    el.$eksPopover = new VuePopover({
      propsData: {
        container: 'body',
        content: value || title,
        target: el,
        trigger: 'hover',
        title: value ? title : false,
      },
    });
  },

  inserted(el: any) {
    el.$eksPopover.$mount();
  },

  update(el: any) {
    el.$eksPopover.update();
  },

  unbind(el: any) {
    el.$eksPopover.$destroy();
  },
};
