import TCCheckbox from '../../tc-checkbox/src';
import TCRadio from '../../tc-radio/src';
import Table from './table';

export default {
  Table,

  install(Vue: any) {
    Vue.use(TCCheckbox);
    Vue.use(TCRadio);
    Vue.component(Table.name, Table);
  },
};
export { Table };
