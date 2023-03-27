import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const stat: AppRouteModule = {
  path: '/stat',
  name: 'Stat',
  component: LAYOUT,
  redirect: '/stat/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'material-symbols:bar-chart',
    title: t('routes.syncany.stat'),
    orderNo: 7,
  },
  children: [
    {
      path: 'index',
      name: 'StatPage',
      component: () => import('/@/views/syncany/stat/index.vue'),
      meta: {
        title: t('routes.syncany.stat'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default stat;
