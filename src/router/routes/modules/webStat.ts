import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const stat: AppRouteModule = {
  path: '/webStat',
  name: 'WebStat',
  component: LAYOUT,
  redirect: '/webStat/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'material-symbols:insert-chart-outline',
    title: t('routes.syncany.webStat'),
    orderNo: 8,
  },
  children: [
    {
      path: 'index',
      name: 'WebStatPage',
      component: () => import('/@/views/syncany/webStat/index.vue'),
      meta: {
        title: t('routes.syncany.webStat'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default stat;
