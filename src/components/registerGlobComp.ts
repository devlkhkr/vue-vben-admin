import { type App } from 'vue';
import { Button } from './Button';
import { Input, Layout } from 'ant-design-vue';
import VueShortKey from 'vue-shortkey';
import VXETable from 'vxe-table';
import { antdvTableVbrowse } from '../utils/direction/antdTableVsearch';

export function registerGlobComp(app: App) {
  app.use(Input).use(Button).use(Layout).use(VXETable).use(VueShortKey);

  app.directive('antdv-table-vbrowse', antdvTableVbrowse);
}
