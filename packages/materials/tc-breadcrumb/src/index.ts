import Breadcrumb from './breadcrumb';
import BreadcrumbItem from './breadcrumb-item';

export default {
  Breadcrumb,
  BreadcrumbItem,

  install(Vue: any) {
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
  },
};
export {
  Breadcrumb,
  BreadcrumbItem,
};
