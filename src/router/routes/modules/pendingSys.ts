import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const pendingSys: AppRouteModule = {
  path: '/pendingSys',
  name: 'PendingSys',
  component: LAYOUT,
  redirect: '/pendingSys/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'material-symbols:clock-loader-60',
    title: t('routes.syncany.pendingSys'),
    orderNo: 6,
  },
  children: [
    {
      path: 'index',
      name: 'PendingSysPage',
      component: () => import('/@/views/syncany/pendingSys/index.vue'),
      meta: {
        title: t('routes.syncany.pendingSys'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default pendingSys;
