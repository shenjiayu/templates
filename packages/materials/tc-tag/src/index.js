import Tag from './tag';

export default {
  Tag,

  install(Vue) {
    Vue.component(Tag.name, Tag);
  },
};
export { Tag };
